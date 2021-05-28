import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appScrollCatcher]'
})
export class ScrollCatcherDirective {
  mouse={x: 0, y:0};
  previousY=0;
  constructor() {
    }
  @HostListener('mousemove', ['$event']) getCoords($event: any){
    this.mouse.x=$event.x;
    this.mouse.y=$event.y;
    console.log('mouse:', this.mouse)
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    console.log(window.scrollY, "prev", this.previousY)
    if(window.scrollY<this.previousY) this.mouse.y=this.mouse.y-this.previousY+window.scrollY;
    else this.mouse.y=this.mouse.y+window.scrollY-this.previousY;
    console.log('mouse:', this.mouse)
    this.previousY=window.scrollY;
  }
}
