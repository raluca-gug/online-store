import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminViewComponent } from './admin-view.component';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;
  let item=JSON.stringify({items: [{
    "brand": "MERIDA",
    "bikeName": "BICICLETĂ MTB ST 100 27,5",
    "issue": "Gears",
    "details": null,
    "date": "2021-05-30T21:00:00.000Z",
    "status": "aproved",
    "user": "609cfe8e3c6f8f576f3f20c6",
    "id": "825"
  }]});
  let invoice=JSON.stringify({items: [{
    "cui": "",
    "id": "737",
    "name": "",
    "price": 200,
    "requestId": "825",
    "ro": false
  }]});

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ AdminViewComponent ]
    })
    .compileComponents();
    
    localStorage.setItem('serviceRequests', item)
    localStorage.setItem('invoiceData', invoice)
    fixture = TestBed.createComponent(AdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
