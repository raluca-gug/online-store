import { FilterProductPipe } from '../../shared-module/pipes/filter-product.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import { NavbarComponent } from 'src/app/shared-module/navbar/navbar.component';
import { ProductItemComponent } from '../../shared-module/product-item/product-item.component';
import { MatIconModule } from '@angular/material/icon';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SocialAuthService } from 'angularx-social-login';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;
  let spy: any;
  let filters= {
    "min": 0,
    "max": 10000,
    "wheel24": true,
    "wheel27": false,
    "wheel29": false,
    "rating": 1
  };
  let products=  [{
    "id": "6040d6ba1e240556a8b76ec8",
    "name": "BICICLETĂ ALL MOUNTAIN 500 S 24 ROCKRIDER",
    "description": "sit ad esse dolore proident adipisicing velit mollit dolore non elit culpa ex anim ex ex aute in magna laboris laboris Lorem do voluptate velit",
    "price": 999,
    "rating": 1.5,
    "itemsInStock": 111,
    "image": "https://images.immediate.co.uk/production/volatile/sites/21/2019/03/vitus-nucleus-29vr-01-1546950934590-28yoc1fsocuj-1549026859608-367lfw54uv0s-3dff6bf-e1564576707898.jpg?quality=90&resize=620,413",
    "brand": "BTWIN"
  },{
    "id": "6040d6ba1e240556a8b76e93",
    "name": "BICICLETĂ MTB ST 100 27,5 GALBEN ROCKRIDER",
    "description": "minim adipisicing esse cupidatat voluptate adipisicing nostrud ut exercitation non excepteur reprehenderit adipisicing magna et proident fugiat aliqua ut mollit ea dolore nostrud elit nisi",
    "price": 1999,
    "rating": 4.8,
    "itemsInStock": 0,
    "image": "https://www.fujibikes.com/usa/img/bikes/catthumbs/2021_FUJI_AURIC_275_13_SAGE_BLACK.jpg",
    "brand": "BTWIN"
  },{
    "id": "6040d6ba1e240556a8b76e97",
    "name": "BICICLETĂ MTB ROCKRIDER ST 500 29 GALBEN FLUO COPII 9-12 ANI BTWIN",
    "description": "cupidatat laborum anim sunt ipsum mollit ad irure eu excepteur ad aliqua amet proident veniam ad nostrud culpa ullamco minim qui id ut consectetur cillum",
    "price": 2999,
    "rating": 3.1,
    "itemsInStock": 82,
    "image": "https://s14761.pcdn.co/wp-content/uploads/2020/06/Santa-Cruz-5010-4-2021-mtb-trail-enduro-test-review9-810x540.jpg",
    "brand": "BTWIN"
  }]

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [
        ProductListComponent,
        FilterProductPipe,
        NavbarComponent,
        ProductItemComponent,
        CdkOverlayOrigin,
      ],
      providers: [{ provide: SocialAuthService, useValue: spy }],
    }).compileComponents();
    translate = TestBed.inject(TranslateService);
    http = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    component.filters=filters
    spy = jasmine.createSpyObj('SocialAuthService', [
      'signIn',
      'signOut',
      'authState',
    ]);
    fixture.detectChanges();
  });

  it('should filter by price', () => {
    component.allProducts=products;
    component.filters.min=0;
    component.filters.max=1000;

    component.filterByPrice();

    expect(component.productsFilteredByPrice[0]).toEqual(products[0]);

    component.filters.min=1000;
    component.filters.max=2000;

    component.filterByPrice();

    expect(component.productsFilteredByPrice[0]).toEqual(products[1]);
  })

  it('should filter by wheel diameter', () => {
    component.allProducts=products;
    component.filters.wheel24=true;

    component.filterByWheel();

    expect(component.productsFilteredByWheel[0]).toEqual(products[0]);

    component.filters.wheel24=true;
    component.filters.wheel27=true;

    component.filterByWheel();

    expect(component.productsFilteredByWheel).toEqual(products.slice(0,2));
  })

  it('should filter by rating', () => {
    component.allProducts=products;
    component.filters.rating=0;

    component.filterByRating();

    expect(component.productsFilteredByRating).toEqual(products);

    component.filters.rating=4;

    component.filterByRating();

    expect(component.productsFilteredByRating[0]).toEqual(products[1]);
  })

  it('should decrease page number', () => {
    component.pageNumber = 2;
    component.decreasePageNo();
    expect(component.pageNumber).toEqual(1);
  });
  it('should show page number', () => {
    component.pageNumber = 2;
    spyOn(component, 'showPageNo').and.callThrough();
    spyOn(component, 'callForProducts');
    component.showPageNo(3);
    expect(component.showPageNo).toHaveBeenCalled();
    expect(component.callForProducts).toHaveBeenCalledTimes(1);
    expect(component.pageNumber).toEqual(3);
  });
  it('should increase page number', () => {
    component.pageNumber = 0;
    component.increasePageNo();
    expect(component.pageNumber).toEqual(1);
  });
  it('should return last page', () => {
    component.totalPages = 11;
    component.showLastPage();
    expect(component.pageNumber).toEqual(10);
  });
});
