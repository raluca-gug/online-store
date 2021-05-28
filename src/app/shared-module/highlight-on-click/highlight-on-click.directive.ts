import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]'
})
export class HighlightOnClickDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.backgroundColor='#FFD1DC';
  }
  on= true;
  @HostListener('click') onClick(){
    if(this.on){
      this.el.nativeElement.style.backgroundColor='#FFD1DC';
    }
    else this.el.nativeElement.style.backgroundColor='';
    this.on=!this.on;
  }

}
