import { CreateUser } from '../models/createUser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed} from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CartService } from './cart.service';

describe('Cart Service', () => {
  let httpController: HttpTestingController;
  let service: CartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports: [HttpClientTestingModule]
    });
  httpController= TestBed.inject(HttpTestingController);
  service= TestBed.inject(CartService);
  });
  describe('get cart()', ()=>{
    it('should call GET at correct URL', ()=>{
      localStorage.setItem('user',JSON.stringify({...new CreateUser(), id:'1'}));

      service.getCart().subscribe();

      const req=httpController.expectOne(`${environment.apiUrl}/carts/users/1`);
      expect(req.request.method).toEqual('GET');
    });
  });

 describe('deleteCart()', ()=>{
   it('should call DELETE at correct URL', ()=>{
     service.deleteCart('1').subscribe();

     const req=httpController.expectOne(`${environment.apiUrl}/carts/1`);
     expect(req.request.method).toEqual('DELETE');
   })
 });

  describe('updateCart()', ()=>{

    it('should call POST at correct URL if cart is not empty and has not been regietered yet', ()=>{
      localStorage.setItem('user',JSON.stringify({...new CreateUser(), id:'1'})); 
      let cart={products: {'6040d6ba1e240556a8b76ec0': 1, '6040d6ba1e240556a8b76ec7': 1}, userId: "606d80af5d5c555fe62bd7aa"};

      service.update(cart);

      const req=httpController.expectOne(`${environment.apiUrl}/carts`);
      expect(req.request.method).toEqual('POST');
    });

    it('should call PUT at correct URL if cart is not empty and has been updated', ()=>{
      localStorage.setItem('user',JSON.stringify({...new CreateUser(), id:'1'}));
      let cart={products: {'6040d6ba1e240556a8b76ec0': 1, '6040d6ba1e240556a8b76ec7': 1}, userId: "606d80af5d5c555fe62bd7aa", id: '1'};

      service.update(cart);

      const req=httpController.expectOne(`${environment.apiUrl}/carts/1`);
      expect(req.request.method).toEqual('PUT');
    })
    
    xit('should call deleteCart if cart is empty', ()=>{
      localStorage.setItem('user',JSON.stringify({...new CreateUser(), id:'1'}));
      let cart={ id: '1', products: {}, userId: "606d80af5d5c555fe62bd7aa"};
      spyOn(service, 'deleteCart').and.callThrough();

      service.update(cart);

      expect(service.deleteCart('1')).toHaveBeenCalled();
    });
  });

  describe('mergeCarts', ()=>{
    it('sould merge local with remote cart if both exist', ()=>{
      let remoteCart={products: {'6040d6ba1e240556a8b76ec0': 1, '6040d6ba1e240556a8b76ec7': 1}, userId: "606d80af5d5c555fe62bd7aa", id: '1'};
      localStorage.setItem('cart',JSON.stringify({products: {'new':1}, userId: "606d80af5d5c555fe62bd7aa"}));

      service.mergeCarts(remoteCart);

      expect(service.mergedCart).toEqual({products: {'6040d6ba1e240556a8b76ec0': 1, '6040d6ba1e240556a8b76ec7': 1, 'new':1}, userId: "606d80af5d5c555fe62bd7aa", id: '1'})

    })
    it('sould PUT resulting merged cart', ()=>{
      let remoteCart={products: {'6040d6ba1e240556a8b76ec0': 1, '6040d6ba1e240556a8b76ec7': 1}, userId: "606d80af5d5c555fe62bd7aa", id: '1'};
      localStorage.setItem('cart',JSON.stringify({products: {'new':1}, userId: "606d80af5d5c555fe62bd7aa"}));

      service.mergeCarts(remoteCart);
      const req= httpController.expectOne(`${environment.apiUrl}/carts/1`)
      expect(req.request.method).toEqual('PUT')

    })
    it('sould push local cart if remote cart is empty', ()=>{
      let remoteCart={products: {}, userId: "606d80af5d5c555fe62bd7aa", id: '1'};
      localStorage.setItem('cart',JSON.stringify({products: {'new':1}, userId: "606d80af5d5c555fe62bd7aa"}));

      service.mergeCarts(remoteCart);

      expect(service.mergedCart).toEqual({products: {'new':1}, userId: "606d80af5d5c555fe62bd7aa", id: '1'})

    })
  })
});
