import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  UsingPipe="UsingPipe";
  @ViewChild('f') form:NgForm;
  // onSubmit(form: NgForm){
  //   console.log(form.value) //form has various properties 
  // }
  onSubmit(){
    // console.log(this.form.value)
    console.log(this.form)
  }
}
