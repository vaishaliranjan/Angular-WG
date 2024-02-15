import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name:string="Vaishali";
  age:number=21;
  status:boolean=true;
  number:number=0;
  username:string="";

  getAge(){
    return this.age;
  }

  onClick(){
    this.number+=1;
    alert("Button clicked")
  }

  onKeyPress(event: any){
    console.log(event.target.value)
  }
}
