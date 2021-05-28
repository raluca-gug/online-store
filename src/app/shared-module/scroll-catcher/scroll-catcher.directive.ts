import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Directive, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appScrollCatcher]',
})
export class ScrollCatcherDirective {
  mouse = { x: 0, y: 0 };
  previousY = 0;
  constructor() {}
  @HostListener('mousemove', ['$event']) getCoords($event: any) {
    this.mouse.x = $event.x;
    this.mouse.y = $event.y;
    console.log('mouse:', this.mouse);
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    console.log(window.scrollY, 'previ', this.previousY);
    let direction = window.scrollY - this.previousY;
    direction < 0 ? (this.mouse.y += direction) : (this.mouse.y += direction);
    console.log('mouse:', this.mouse);
    this.previousY = window.scrollY;
  }
}
