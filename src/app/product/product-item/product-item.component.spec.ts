import { Product } from './../../core/models/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductItemComponent } from './product-item.component';
import { HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let translate: TranslateService;
  let expectedInput={"id":"6040d6ba1e240556a8b76e8e","name":"BICICLETĂ MTB XC 900 S 29 CARBON ROȘU/NEGRU ROCKRIDER","description":"mollit culpa labore quis proident ullamco mollit ullamco do cupidatat est exercitation aliqua exercitation laborum sunt ullamco ea esse sunt exercitation incididunt laborum ex laborum","price":1577.8,"rating":0.0,"itemsInStock":72,"image":"https://s14761.pcdn.co/wp-content/uploads/sites/2/2020/08/Husqvarna-E-Mountainbikes-emtb-2021-Extreme-Cross-Hard-Cross-Mountain-Cross-news11-375x195.jpg","brand":"GIANT", "qty":0};
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        })
       ],
      providers: [{provide: Router, useValue: routerSpy}]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product=expectedInput;
    fixture.detectChanges();
  }));

  it('should display received input', () => {
    const element = fixture.debugElement.query(By.css('#img')).nativeElement;
    expect(element.src).toEqual(expectedInput.image);
  });

  it('should raise event when clicked ', () => {
    let selectedProductId!: string;
    component.id.pipe(first()).subscribe((res) => selectedProductId = res);
    const element = fixture.debugElement.query(By.css('#clickable')).nativeElement;
  
    element.click();

    expect(selectedProductId).toBe(expectedInput.id);
  });

  it('should navigate to product detail page on click', fakeAsync(() => {
    const element = fixture.debugElement.query(By.css('.product')).nativeElement;
    element.click();
    tick();

    const spy = routerSpy.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];

    expect(navArgs).toEqual(`products/${expectedInput.id}`);
  }));
});
