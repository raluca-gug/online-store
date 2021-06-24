import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filters } from 'src/app/core/models/filters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filtersForm!: FormGroup;
  clearAll=false;
  clearPrice=false;
  clearWheel=false;
  clearRating=false;
  @Output() filterEvent=new EventEmitter<Filters>();
  filters= new Filters();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filtersForm=this.fb.group({
      min: 0,
      max: 10000,
      wheel24: false,
      wheel27: false,
      wheel29: false,
      rating: 0
    });
  }

  sendFilters () {
    Object.assign(this.filters, this.filtersForm.value);
    console.log('filters: ', this.filters)
    this.filterEvent.emit(this.filters);
    this.clearAll=true;
    if((this.filters.min !=0 || this.filters.max !=10000) && this.filters.min!=undefined && this.filters.max!=undefined) this.clearPrice=true;
    if(this.filters.wheel24 || this. filters.wheel27 || this.filters.wheel29) this.clearWheel=true;
    if(this.filters.rating) this.clearRating=true;
  }

  sendClear(param: string) {
    if(param=='all') {
      this.clearAll=false;
      this.clearPrice=false;
      this.clearWheel=false;
      this.clearRating=false;
      this.filters= new Filters();
      this.filterEvent.emit(this.filters);
      this.filtersForm.reset();
    } 
    if (param=='price') {
      this.clearPrice=false;
      if(!this.clearWheel && !this.clearRating) this.clearAll=false;
      this.filters.min=0;
      this.filters.max=10000;
      this.filterEvent.emit(this.filters);
      this.filtersForm.controls.min.reset();
      this.filtersForm.controls.max.reset();
    }
    if (param=='wheel') {
      this.clearWheel=false;
      if(!this.clearPrice && !this.clearRating) this.clearAll=false;
      this.filters.wheel24= true;
      this.filters.wheel27= true;
      this.filters.wheel29= true;
      this.filterEvent.emit(this.filters);
      this.filtersForm.controls.wheel24.reset();
      this.filtersForm.controls.wheel27.reset();
      this.filtersForm.controls.wheel29.reset();
    }
    if (param=='rating') {
      this.clearRating=false;
      if(!this.clearPrice && ! this.clearWheel) this.clearAll=false;
      this.filters.rating=0;
      this.filterEvent.emit(this.filters);
      this.filtersForm.controls.rating.reset();
    }
  }
}
