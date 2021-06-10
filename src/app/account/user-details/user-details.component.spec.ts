import { AccountService } from '../../core/services/account.service';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDetailsComponent } from './user-details.component';
import { NavbarComponent } from '../../shared-module/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SocialAuthService } from 'angularx-social-login';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { HttpLoaderFactory } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let spy: any;
  let element: any;
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
  let detail=JSON.stringify({items:[{
    "id": "60ba21fa76d6230bd7167872",
    "weight": 20,
    "height": 15,
    "yearOfBirth": 1920
  }]})

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [UserDetailsComponent, NavbarComponent, CdkOverlayOrigin],
      providers: [
        FormBuilder,
        { provide: AccountService },
        { provide: SocialAuthService, useValue: spy },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailsComponent);
    localStorage.setItem('user', user);
    localStorage.setItem('additionalDetails', detail)
    component = fixture.componentInstance;
    component.detailsOption=5;
    spy = jasmine.createSpyObj('SocialAuthService', [
      'signIn',
      'signOut',
      'authState',
    ]);
    fixture.detectChanges();
  }));

  it('should disable submit button if input weight is < 3  or > 200', () => {
    element = fixture.debugElement.query(By.css('#additionalDetails')).nativeElement;

    component.additionalDetailsForm.controls['weight'].setValue(-50);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);

    component.additionalDetailsForm.controls['weight'].setValue(2);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);

    component.additionalDetailsForm.controls['weight'].setValue(201);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);
  });

  it('should disable submit button if input height is <=0 or > 250', () => {
    element = fixture.debugElement.query(By.css('#additionalDetails')).nativeElement;

    component.additionalDetailsForm.controls['height'].setValue(-1);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);

    component.additionalDetailsForm.controls['height'].setValue(0);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);

    component.additionalDetailsForm.controls['height'].setValue(251);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);
  });

  it('should disable submit button if year of birth is <1920 or > 2020', () => {
    element = fixture.debugElement.query(By.css('#additionalDetails')).nativeElement;

    component.additionalDetailsForm.controls['yearOfBirth'].setValue(1919);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);

    component.additionalDetailsForm.controls['yearOfBirth'].setValue(2021);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);
  });

  it('should disable submit button if year has decimal point', () => {
    element = fixture.debugElement.query(By.css('#additionalDetails')).nativeElement;

    component.additionalDetailsForm.controls['yearOfBirth'].setValue(2000.5);
    fixture.detectChanges();
    
    expect(element.disabled).toEqual(true);
  });
});
