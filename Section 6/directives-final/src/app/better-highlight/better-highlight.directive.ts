import {Directive, OnInit,ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //alternative of renderer
  @Input() defaultColor: string='green';
  @Input('appBetterHighlight') highlightColor: string='white';
  @HostBinding('style.color') color:string= this.defaultColor;

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.color=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.color=this.defaultColor;
  }
 constructor(private elRef:ElementRef,private renderer: Renderer2){}

 ngOnInit(): void {
  //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
 }
}
