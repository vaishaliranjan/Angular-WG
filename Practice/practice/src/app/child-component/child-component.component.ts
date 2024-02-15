import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input() employee:{name:string,age:number};
  @Output() empAdded= new EventEmitter<string>();

  onSubmitList(){
    this.empAdded.emit("Employee added successfully!")!
  }
}
