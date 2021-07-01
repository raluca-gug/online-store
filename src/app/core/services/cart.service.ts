import { cartBE } from './../models/cartBE';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product } from '../models/product';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSource = new BehaviorSubject(
    JSON.parse(localStorage.getItem('cart') || '{}')
  );
  user!: User;
  mergedCart!: any;
  remoteCart!: any;
  currentCart = this.cartSource.asObservable();

  constructor(private http: HttpClient) {}

  update(cart: any) {
    this.cartSource.next(cart);
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.setItem('cart', JSON.stringify(cart));
    if (Object.keys(this.user).length != 0 && Object.keys(cart).length != 0) {
      if (cart.hasOwnProperty('id')) {
        if (Object.keys(cart.products).length)
          this.http
            .put(`${environment.apiUrl}/carts/${cart.id}`, cart)
            .subscribe();
        else {
          this.deleteCart(cart.id).subscribe();
          localStorage.setItem('cart', JSON.stringify({}));
          this.cartSource.next({});
        }
      } else {
        this.http.post(`${environment.apiUrl}/carts`, cart).subscribe((res) => {
          localStorage.setItem('cart', JSON.stringify(res));
          this.cartSource.next(res);
        });
      }
    }
  }

  getCart() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.http.get(`${environment.apiUrl}/carts/users/${this.user.id}`);
  }

  deleteCart(id: string) {
    return this.http.delete(`${environment.apiUrl}/carts/${id}`);
  }
  //merge locally added products to cart before login with products in cart saved in BE
  mergeCarts(response: any) {
    let localCart = JSON.parse(localStorage.getItem('cart') || '{}');
    let exists = false;
    if (response.length != 0) {
      this.mergedCart = response;
      if (Object.keys(localCart).length > 0) {
        for (var key in response.products) {
          if (localCart.products.hasOwnProperty(key)) {
            this.mergedCart.products[key] += localCart.products[key];
            delete localCart.products[key];
            exists = true;
          }
        }
        for (let key in localCart.products)
          this.mergedCart.products[key] = localCart.products[key];
      }
      localStorage.setItem('cart', JSON.stringify(this.mergedCart));
      this.http
        .put(
          `${environment.apiUrl}/carts/${this.mergedCart.id}`,
          this.mergedCart
        )
        .subscribe();
      this.cartSource.next(this.mergedCart);
    } else {
      if (Object.keys(localCart).length > 0) {
        this.mergedCart = localCart;
        this.mergedCart.userId = JSON.parse(
          localStorage.getItem('user') || '{}'
        ).id;
        if (localCart.hasOwnProperty('products')) {
          this.http
            .post(`${environment.apiUrl}/carts`, this.mergedCart)
            .subscribe((res) => {
              localStorage.setItem('cart', JSON.stringify(res));
              this.cartSource.next(res);
            });
        }
      } else {
        this.mergedCart = localCart;
        this.cartSource.next(this.mergedCart);
      }
    }
  }

  addToCart(product: Product, qty: number) {
    if (qty===0) return of (product);
    let cart= new cartBE();

    this.currentCart.pipe(first()).subscribe((res) => {
      if (Object.keys(res).length !== 0) cart = res;
      let existInCart = false;
      for (let key in cart.products)
        if (key === product.id) {
          if (cart.products[key] + qty <= product.itemsInStock) {
            cart.products[key] += qty;
          } else cart.products[key] = product.itemsInStock;
          existInCart = true;
        }
      if (!existInCart) {
        cart.products[product.id] = qty;
        if (localStorage.hasOwnProperty('user'))
          cart.userId = JSON.parse(
            localStorage.getItem('user') || '{}'
          ).id;
      }
      if (cart.products != null) delete cart.products[''];
      this.update(cart);
    })
    return of (product);
  }
}
