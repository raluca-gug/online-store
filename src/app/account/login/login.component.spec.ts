import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SocialAuthService } from 'angularx-social-login';
import { By } from 'protractor';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpLoaderFactory } from 'src/app/app.module';
import { AccountService } from 'src/services/account.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let spy: any;

  beforeEach(async () => {
    spy = jasmine.createSpyObj('SocialAuthService', [
      'signIn',
      'signOut',
      'authState',
    ]);
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'account/login', component: LoginComponent },
        ]),
        HttpClientTestingModule,
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [LoginComponent],
      providers: [{ provide: SocialAuthService, useValue: spy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    spy.authState = of(null); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shuould submit request', () => {
    const accountService = fixture.debugElement.injector.get(AccountService);
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not login', () => {
    //const accountService = fixture.debugElement.injector.get(AccountService);
    component.errorFromServer = true;
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toThrowError();
  });

  it('should submit password and user through account service', () => {
    const accountService = fixture.debugElement.injector.get(AccountService);
    spyOn(accountService, 'login').and.callThrough();
    component.accountService
      .login('jade', 'Test1234?')
      .pipe(first())
      .subscribe();
    expect(component.accountService.login).toHaveBeenCalledWith(
      'jade',
      'Test1234?'
    );
  });

  // it('should throw error because password pattern does not match', () => {
  //   const accountService = fixture.debugElement.injector.get(AccountService);
  //   component.accountService.login('jade', 'Test1234');
  //   expect(component.accountService.userValue==null || component.accountService.userValue==({ })).toBe(true);
  //   // expect(component.accountService.userValue).toBe(true);
  // });

  it('should call FB sign in on click to FB button', fakeAsync(() => {
    spyOn(component, 'signInWithFB');
  
    let button = fixture.debugElement.nativeElement.querySelector('#fb');
    button.click();
    tick();
    expect(component.signInWithFB).toHaveBeenCalled();
  
  }));

  it('should call Google sign in on click to Google button', fakeAsync(() => {
    spyOn(component, 'signInWithGoogle');
  
    let button = fixture.debugElement.nativeElement.querySelector('#google');
    button.click();
    tick();
    expect(component.signInWithGoogle).toHaveBeenCalled();
  
  }));
});
