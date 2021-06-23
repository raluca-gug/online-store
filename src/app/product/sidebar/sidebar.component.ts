import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filters } from 'src/app/core/models/filters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  priceRangeForm!: FormGroup;
  wheelDiameterForm!: FormGroup;
  ratingForm!:FormGroup;
  clearAll=false;
  clearPrice=false;
  clearWheel=false;
  clearRating=false;
  @Output() filterEvent=new EventEmitter<Filters>();
  filters= new Filters();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.priceRangeForm=this.fb.group({
      min: [0, Validators.required],
      max: [10000, Validators.required] 
    });
    this.wheelDiameterForm=this.fb.group({
      wheel24: false,
      wheel27: false,
      wheel29: false
    }, 
    {validators: [this.validateOneIsChecked()]});
    this.ratingForm=this.fb.group({
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false
    }, 
    {validators: [this.validateOneIsChecked()]});
  }

  sendPriceRange () {
    Object.assign(this.filters.priceRange, this.priceRangeForm.value);
    this.filterEvent.emit(this.filters);
    this.clearAll=true;
    this.clearPrice=true;
  }

  sendWheel () {
    Object.assign(this.filters.wheelDiameter, this.wheelDiameterForm.value)
    this.filterEvent.emit(this.filters);
    this.clearAll=true;
    this.clearWheel=true;
  }

  sendRating () {
    Object.assign(this.filters.rating, this.ratingForm.value);
    this.filterEvent.emit(this.filters);
    this.clearAll=true;
    this.clearRating=true;
  }

  sendClear(param: string) {
    if(param=='all') {
      this.clearAll=false;
      this.clearPrice=false;
      this.clearWheel=false;
      this.clearRating=false;
      this.filters= new Filters();
      this.filterEvent.emit(this.filters);
      this.priceRangeForm.reset();
      this.wheelDiameterForm.reset();
      this.ratingForm.reset();
    } 
    if (param=='price'){
      this.clearPrice=false;
      if(!this.clearWheel && !this.clearRating) this.clearAll=false;
      this.filters.priceRange={min:0, max: 10000}
      this.filterEvent.emit(this.filters);
      this.priceRangeForm.reset();
    } 
    if (param=='wheel') {
      this.clearWheel=false;
      if(!this.clearPrice && !this.clearRating) this.clearAll=false;
      this.filters.wheelDiameter={wheel24: true, wheel27: true, wheel29: true}
      this.filterEvent.emit(this.filters);
      this.wheelDiameterForm.reset();
    }
    if (param=='rating') {
      this.clearRating=false;
      if(!this.clearPrice && ! this.clearWheel) this.clearAll=false;
      this.filters.rating={star1: true, star2: true, star3: true, star4: true, star5: true}
      this.filterEvent.emit(this.filters);
      this.ratingForm.reset();
    }
  }

  validateOneIsChecked () {
    return (formGroup: FormGroup): ValidationErrors | null => {
      let numberOfCheckedBoxes=0;
      Object.keys(formGroup.controls).forEach(el=> {
        if(formGroup.controls[el].value) numberOfCheckedBoxes++  });
      if (numberOfCheckedBoxes < 1) {
          return { requireCheckboxesToBeChecked: true};
        }
      return null;
    };
  }

}
