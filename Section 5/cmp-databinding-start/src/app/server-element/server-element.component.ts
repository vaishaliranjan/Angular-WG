import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit,AfterViewChecked, OnDestroy{


  @Input('srvElement') element: {type: string, name: string, content:string};
  @Input()name:string;
    constructor(){
      console.log("Constructor called")//called 1st
    }
  @ViewChild('heading',{static:true}) header: ElementRef;
    @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;
    
    ngOnChanges(changes: SimpleChanges){
      console.log("Onchanges called");
      console.log(changes)// whenever chnage in properties with input decorator 2nd
    }

    ngOnInit(){
      console.log("ngOnInit called.")
      console.log('Text content '+this.header.nativeElement.textContent);
      // console.log("Text content of "+ this.paragraph.nativeElement.textContent);
    }//after constructor 3rd 
    

    ngDoCheck(): void {
      console.log("ngDoCheck called") //any change or trigger //4th
    }

    ngAfterContentInit(): void {
      console.log("ngAfterContentInit called") //after do check but only once//5th
      // console.log("Text content of "+ this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked called")//after do check but everytim theres is chnage //6th
    }

    ngAfterViewInit(): void {
      console.log("ngAfterViewInit called");
      console.log('Text content '+this.header.nativeElement.textContent); 
    }

    ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked called")//after do check but everytim theres is chnage //6th
    }

    ngOnDestroy(): void {
      console.log("OnDestroy called")
    }

}
