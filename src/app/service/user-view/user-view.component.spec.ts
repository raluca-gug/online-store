import { ProductService } from './../../core/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserViewComponent } from './user-view.component';
import { of } from 'rxjs';


describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;
  let productService: any;
  let getProductsSpy: any;
  let response={"content":[{"id":"6040d6ba1e240556a8b76e8e","name":"BICICLETĂ MTB XC 900 S 29 CARBON ROȘU/NEGRU ROCKRIDER","description":"mollit culpa labore quis proident ullamco mollit ullamco do cupidatat est exercitation aliqua exercitation laborum sunt ullamco ea esse sunt exercitation incididunt laborum ex laborum","price":1577.8,"rating":0.0,"itemsInStock":72,"image":"https://s14761.pcdn.co/wp-content/uploads/sites/2/2020/08/Husqvarna-E-Mountainbikes-emtb-2021-Extreme-Cross-Hard-Cross-Mountain-Cross-news11-375x195.jpg","brand":"GIANT", "qty": 0}]};
  let user=JSON.stringify({
    "firstName": "Raluca",
    "lastName": "Vana",
    "email": "raluca.vana@gmail.com",
    "username": "Raluca1234",
    "telephone": "0700000",
    "sex": "",
    "password": "$2a$10$4GWTI56aIFnbwPLbDA27nO9GzWe8mHvRkugyggf5GFWNF5tWt/eay",
    "addressEntity": {
        "address": "dacia",
        "city": "Oradea",
        "county": "bihor",
        "postalCode": "161616"
    },
    "id": "60ba21fa76d6230bd7167872",
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MGJhMjFmYTc2ZDYyMzBiZDcxNjc4NzIsUmFsdWNhMTIzNCIsImlzcyI6ImV1LmFjY2VzYS5vbmxpbmVzdG9yZSIsImlhdCI6MTYyMjgxMTQ2NywiZXhwIjoxNjIzNDE2MjY3fQ.H7Dx_xgUZN9QY3Pa2qpGI66X_Ax-jdKaOmX6c0OCRgdFL5qPYqT8DCBKfd-T-C1btACrJ5mRZia9NIXPt_upTA"
})

  beforeEach( () => {
    productService=jasmine.createSpyObj('ProductService', ['getProducts']);
    getProductsSpy = productService.getProducts.and.returnValue(of(response));
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ UserViewComponent ], 
      providers: [{provide: ProductService, useValue: productService}]
    })
    .compileComponents();
    localStorage.setItem('user', user);
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
    productService=TestBed.inject(ProductService);
  });

  describe('onInit', ()=>{
    it('should get all products for select', ()=>{
      fixture.detectChanges();
      
      expect(component.products[0]).toEqual(response.content[0]);
    })
  })
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
