import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/core/services/product.service';

import { RecommendedComponent } from './recommended.component';

describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;
  let spy: any;
  let details=[{
    "id": "6040d6ba1e240556a8b76ec9",
    "category": "Electrica",
    "maxWeight": 200,
    "wheelDiameter": 27.5,
    "price": 100
  },
  {
    "id": "6040d6ba1e240556a8b76ecb",
    "category": "MTB",
    "maxWeight": 160,
    "wheelDiameter": 26,
    "price": 100
  },
  {
    "id": "6040d6ba1e240556a8b76e9f",
    "category": "All mountain",
    "maxWeight": 80,
    "wheelDiameter": 29,  
    "price": 100
  },  
  {
    "id": "6040d6ba1e240556a8b76e97",
    "category": "Copii",
    "maxWeight": 40,
    "wheelDiameter": 24,
    "price": 100
  }]
  let userDetail=JSON.stringify({items:[{
    "id": "60ba21fa76d6230bd7167872",
    "weight": 200,
    "height": 200,
    "yearOfBirth": 1920
  }]})
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
    TestBed.configureTestingModule({
      declarations: [ RecommendedComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: ProductService, useVaue: spy}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RecommendedComponent);
    component = fixture.componentInstance;
    spy = jasmine.createSpyObj('ProductService', ['getProduct']);
    localStorage.setItem('user', user);
    //localStorage.setItem('additionalDetails', userDetail)
    localStorage.setItem('productsDetails', JSON.stringify(details));
    fixture.detectChanges();
  });
  describe('filter by weight', ()=>{
    it('should return Electric for weight=200', () => {
      component.userDetails.weight=200;
  
      expect(component.filterByWeight()).toEqual([details[0]]);
    });

    it('should return Electric and MTB for weight=140', () => {
      component.productsDetails=details;
      component.userDetails.weight=140;
  
      expect(component.filterByWeight()).toEqual(details.slice(0,2));
    })

    it('should return Electric, MTB and All Mountain for weight=79', () => {
      component.productsDetails=details;
      component.userDetails.weight=79;

      expect( component.filterByWeight()).toEqual(details.slice(0,3));
    })

    it('should return Electric, MTB, All Mountain  and Copii for weight=30', () => {
      component.productsDetails=details;
      component.userDetails.weight=30;
    
      expect( component.filterByWeight()).toEqual(details);
    })
  });

  describe('filter by wheelRange', ()=>{
    it('should return 27.5" and 29" height=200', () => {
      component.productsDetails=details;
      component.userDetails.height=200;

      expect(component.filterByWheelRange(details)).toEqual([details[0], details[2]]);

    });
    it('should return 26", 27.5" and 29" height=180', () => {
      component.productsDetails=details;
      component.userDetails.height=180;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelRange(details)).toEqual(details.slice(0,3));
    })
    it('should return 26", 27.5" and 24" height=150', () => {
      component.productsDetails=details;
      component.userDetails.height=150;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelRange(details)).toEqual([details[0], details[1], details[3]]);
    })
    it('should return 26" and 24" height=140', () => {
      component.productsDetails=details;
      component.userDetails.height=140;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelRange(details)).toEqual([details[1], details[3]]);
    })
  });
  
  describe('filter by wheelDiameter', ()=>{
    it('should return 29" height=200', () => {
      component.productsDetails=details;
      component.userDetails.height=200;

      expect(component.filterByWheelDiameter(details)).toEqual([details[2]]);

    });
    it('should return 27.5" and height=180', () => {
      component.productsDetails=details;
      component.userDetails.height=180;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelDiameter(details)).toEqual([details[0]]);
    })
    it('should return 26" height=150', () => {
      component.productsDetails=details;
      component.userDetails.height=150;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelDiameter(details)).toEqual([details[1]]);
    })
    it('should return 24" height=140', () => {
      component.productsDetails=details;
      component.userDetails.height=140;
      component.idealWheel=component.computeIdealWheel(component.userDetails.height);

      expect(component.filterByWheelDiameter(details)).toEqual([details[3]]);
    })
  });
  describe('filter by age', ()=>{
    it('should return Electric for age=70', () => {
      component.userDetails.yearOfBirth=1951;

      expect(component.filterByAge(details)).toEqual([details[0]]);

    });
    it('should return All mountain for age=51', () => {
      component.userDetails.yearOfBirth=1970;

      expect(component.filterByAge(details)).toEqual([details[2]]);
    })
    it('should return Mtb for age=29', () => {
      component.userDetails.yearOfBirth=1992;

      expect(component.filterByAge(details)).toEqual([details[1]]);
    })
    it('should return Copii for age=10', () => {
      component.userDetails.yearOfBirth=2011;

      expect(component.filterByAge(details)).toEqual([details[3]]);
    })
  });
})
  