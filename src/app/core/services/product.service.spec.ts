/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject, waitForAsync } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('Service: Product', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
  }));

  {
    it('should ...', inject([ProductService], (service: ProductService) => {
      expect(service).toBeTruthy();
    }));
  }

  it('should get products', inject(
    [ProductService],
    (service: ProductService) => {
      spyOn(service, 'getProducts').and.callThrough();
      let res;
      service.getProducts(0, 10, '', '').subscribe(x=>{
        res=x;
        expect(res.content[0].id).toBe('6040d6ba1e240556a8b76ed7');
      } );
      
      //expect(service.getProducts).toHaveBeenCalledWith(0, 10, '', '');
    }
  ));
  it('should get product', inject(
    [ProductService],
    (service: ProductService) => {
      spyOn(service, 'getProduct').and.callThrough();
      service.getProduct(100);
      expect(service.getProduct).toHaveBeenCalled();
      expect(service.getProduct).toHaveBeenCalledWith(100);
    }
  ));
  it('should get page size', inject(
    [ProductService],
    (service: ProductService) => {
      spyOn(service, 'getPageSize').and.callThrough();
      service.getPageSize(20);
      expect(service.getPageSize).toHaveBeenCalled();
      expect(service.getPageSize).toHaveBeenCalledWith(20);
    }
  ));
});
