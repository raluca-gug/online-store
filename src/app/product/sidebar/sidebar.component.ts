import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  priceRangeForm!: FormGroup;
  wheelDiameterForm!: FormGroup;
  clearAll=false;
  clearPrice=false;
  clearWheel=false;
  @Output() priceRange= new EventEmitter<{min: number, max: number}>();
  @Output() wheelDiameter= new EventEmitter<{24: boolean, 27: boolean, 29:boolean}>();
  @Output() clearFilter=new EventEmitter<{all: boolean, price: boolean, wheel: boolean}>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.priceRangeForm=this.fb.group({
      min: 0,
      max: 0
    })
    this.wheelDiameterForm=this.fb.group({
      24: false,
      27: false,
      29: false
    })
  }

  sendPriceRange() {
    this.priceRange.emit({min: this.priceRangeForm.controls.min.value, max: this.priceRangeForm.controls.max.value})
    this.clearAll=true;
    this.clearPrice=true;
  }

  sendWheel() {
    
    this.wheelDiameter.emit(this.wheelDiameterForm.value)
    this.clearAll=true;
    this.clearWheel=true;
  }

  sendClear(param: string) {
    if(param=='all') {
      this.clearAll=false;
      this.clearPrice=false;
      this.clearWheel=false;
      this.clearFilter.emit({all: true, price: false, wheel: false});
    } 
    if (param=='price'){
      this.clearPrice=false;
      this.clearFilter.emit({all: false, price: true, wheel: false});
    } 
    if (param=='wheel') {
      this.clearWheel=false;
      this.clearFilter.emit({all: false, price: false, wheel: true});
    }
  }

}
