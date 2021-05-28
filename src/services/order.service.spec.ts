import { environment } from './../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let httpTestingController: HttpTestingController;
  let service: OrderService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    httpTestingController= TestBed.inject(HttpTestingController)
    service=TestBed.inject(OrderService);
  });

  
  describe('postOrder() ',()=>{
    it('should call post with the correct URL', ()=>{

      service.postOrder({}).subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUrl}/orders`);
      expect(true).toBe(true) //to avoid 'has no spec' warning
      req.flush({});
      httpTestingController.verify();
    });
  });

  describe('getOrderByUserId() ',()=>{
    it('should call get with the correct URL', ()=>{

      service.getOrderByUserId('1').subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUrl}/orders/user/1`);
      expect(true).toBe(true) //to avoid 'has no spec' warning
      req.flush({});
      httpTestingController.verify();
    });
  });

  describe('postPayPal() ',()=>{
    it('should call post with the correct URL ', ()=>{

      service.postPayPal({}).subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUrl}/payments/pay`);
      expect(true).toBe(true) //to avoid 'has no spec' warning
      req.flush({});
      httpTestingController.verify();
    });
  });

  
});
