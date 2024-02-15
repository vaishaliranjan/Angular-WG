import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string;
  age:number;
  employee:{name:string,age:number}
  message:string;
  onSubmitForm(name:HTMLInputElement, age:HTMLInputElement){
    this.name=name.value;
    this.age=+age.value;
    this.employee={name:this.name,age:this.age}

    
  }

  onEmployeeAdded(msg:string){
    alert(msg);
    this.message=msg;
  }
}
