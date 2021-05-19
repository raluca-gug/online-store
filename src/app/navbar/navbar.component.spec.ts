import { CdkOverlayOrigin } from '@angular/cdk/overlay';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let spy: any;

  beforeEach(async(() => {
    spy = jasmine.createSpyObj('SocialAuthService', [
      'signIn',
      'signOut',
      'authState',
    ]);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [NavbarComponent, CdkOverlayOrigin],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: SocialAuthService, useValue: spy },
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    spy.authState = of(null);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show user options if user is not logged in', () => {
    component.userOptions = true;
    spyOn(component, 'signout').and.callThrough();
    spyOn(component, 'signOut').and.callThrough();
    component.signout();
    component.signOut();
    expect(component.userOptions).toBeFalse();
  });

  it('should go to login section if user is not logged in', () => {
    component.userLogged = false;
    spyOn(component, 'goToLogin').and.callThrough();
    component.goToLogin();
    fixture.detectChanges();
    expect(component.goToLogin).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(
      ['/account/login'],
      Object({ state: jasmine.any(Object) })
    );
  });
});
