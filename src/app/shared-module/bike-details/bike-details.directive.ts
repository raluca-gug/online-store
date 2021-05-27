import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBikeDetails]'
})
export class BikeDetailsDirective {

  constructor(private el: ElementRef, private render: Renderer2) { 
  }

  @Input() product: any;

  @HostListener('mouseenter') onMouseEnter(){
    this.replaceContent(true);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.replaceContent(false);
  }
  
  
  private replaceContent(add:boolean){
    const child=this.render.createElement('div')
    let content=`<div id="info" style="background-color: aliceblue; border: 1px solid blue; position: absolute; top: 10px; z-index: 100; width: 200px; border-radius: 3%; padding: 8px;">
                  <div>
                      <label for="">Name:</label>
                      <span>${this.product.name.slice(0,20)}</span>
                  </div>
                  <div>
                      <label for="">Details: </label>
                      <span>${this.product.description.slice(0,30)}</span>
                  </div>
                  <div>
                      <label for="">Price: </label>
                      <span>${this.product.price}</span>
                  </div>
                  <div>
                      <label for="">Rating: </label>
                      <span>${this.product.rating}</span>
                  </div>
              </div>`
    this.render.setProperty(child, 'innerHTML', content);
    if(add) this.render.appendChild(this.el.nativeElement, child);
    else this.render.removeChild(this.el.nativeElement, this.el.nativeElement.children[1]);
    
    console.log('bf', this.el.nativeElement.children);
  }
}

    