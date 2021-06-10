import { ProductService } from 'src/app/core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/app/shared-module/navbar/navbar.component';
import { ProductItemComponent } from '../../shared-module/product-item/product-item.component';
import { RatingModule } from 'ng-starrating';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SocialAuthService } from 'angularx-social-login';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let product: any;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CdkOverlayOrigin,
        ProductDetailsComponent,
        NavbarComponent,
        ProductItemComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        MatDialogModule,
        NoopAnimationsModule,
        RatingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        { provide: CartService, ProductService },
        { provide: SocialAuthService, useValue: spy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    product = {
      name:
        'BICICLETĂ MTB ROCKRIDER ST 500 24 GALBEN FLUO COPII 9-12 ANI BTWIN',
      description:
        'deserunt tempor cupidatat proident do irure duis veniam laboris est non laborum velit nisi aute ullamco mollit dolor consequat tempor fugiat nisi voluptate non anim',
      price: 7328.4,
      rating: 4.8,
      itemsInStock: 95,
      image:
        'https://s14761.pcdn.co/wp-content/uploads/2020/06/Santa-Cruz-5010-4-2021-mtb-trail-enduro-test-review9-810x540.jpg',
      brand: 'BTWIN',
      id: '6040d6ba1e240556a8b76ea0',
    };
    spy = jasmine.createSpyObj('SocialAuthService', [
      'signIn',
      'signOut',
      'authState',
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bring the product data', () => {
    const productService = fixture.debugElement.injector.get(ProductService);
    const mySpy = spyOn(productService, 'getProduct').and.callThrough();
    component.ngOnInit();
    expect(mySpy).toHaveBeenCalledTimes(1);
    productService
      .getPageSize(product.id)
      .subscribe((response) => expect(response).toBe(product));
  });

  it('should push product in history', () => {
    component.handleHistory(product);
    expect(component.history).toEqual([product]);
  });

  it('should update the cart when the product is added', () => {
    component.id = product.id;
    component.cart.products = {
      '6040d6ba1e240556a8b76e8f': 1,
      '6040d6ba1e240556a8b76ea4': 1,
    };
    component.product = product;
    const cartService = fixture.debugElement.injector.get(CartService);
    const mySpy = spyOn(cartService, 'update').and.callThrough();
    component.addToCart();
    fixture.detectChanges();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });
});
