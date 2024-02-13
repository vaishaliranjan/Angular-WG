import { Component,ElementRef,EventEmitter,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated= new EventEmitter<{serverName: string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName: string,serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput',{static:true})serverContentInput: ElementRef;
   
  
  onAddServer(serverNameInput) {
    console.log(serverNameInput.value);
   this.serverCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverNameInput) {
   this.blueprintCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value})
  }
}
