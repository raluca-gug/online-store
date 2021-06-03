import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserViewComponent } from './user-view.component';

fdescribe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ UserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
  });

  describe('sortByDate ', ()=>{
    it('shoud sort dates asscending if sortAsc is true', () => {
      component.sortAsc=true;
      component.requests=[{date: '2021-05-02T21:00:00.000Z' }, {date: '2021-05-01T21:00:00.000Z'}, {date: '2021-05-03T21:00:00.000Z'}];
      let filtered=[{date: '2021-05-01T21:00:00.000Z' }, {date: '2021-05-02T21:00:00.000Z'}, {date: '2021-05-03T21:00:00.000Z'}];
  
      component.sortByDate();
      
      expect(component.requests).toEqual(filtered)
    });
    it('should sort dates descending if sortAsc is false', () => {
      component.sortAsc=false;
      component.requests=[{date: '2021-05-02T21:00:00.000Z' }, {date: '2021-05-01T21:00:00.000Z'}, {date: '2021-05-03T21:00:00.000Z'}];
  
      component.sortByDate();
  
      expect(component.requests).toEqual([{date: '2021-05-03T21:00:00.000Z' }, {date: '2021-05-02T21:00:00.000Z'}, {date: '2021-05-01T21:00:00.000Z'}])
    });
  })
 
  describe('sortByBrand', ()=>{
    it('should filter bikes by given brand', ()=>{
      let event={value: 'brand1'};
      component.bikes=[{id: '1', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand2'}}];
  
      component.filterByBrand(event);
       
      expect(component.filteredBikes).toEqual([{id: '1', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand1'}}])
  
    });
    it('filteredBikes should be identical with original bikes array if event value is null', ()=>{
      let event={value: null};
      component.bikes=[{id: '1', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand2'}}];
  
      component.filterByBrand(event);
       
      expect(component.filteredBikes).toEqual(component.bikes);
  
    });
    it('should empty filteredBikes array if event value is "Other"', ()=>{
      let event={value: 'Other'};
      component.requestForm= new FormGroup({ bikeName: new FormControl(null)});
      component.bikes=[{id: '1', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand1'}}, {id: '2', product: {brand: 'brand2'}}];
      
      component.filterByBrand(event);
       
      expect(component.filteredBikes).toEqual([]);
  
    });
  })  
});
