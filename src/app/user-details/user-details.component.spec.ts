import { AccountService } from '../core/services/account.service';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserDetailsComponent } from './user-details.component';
import { NavbarComponent } from '../shared-module/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { SocialAuthService } from 'angularx-social-login';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
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
        { provide: AccountService },
        { provide: SocialAuthService, useValue: spy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
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

  it('should submit new name through account service', () => {
    const accountService = fixture.debugElement.injector.get(AccountService);
    const mySpy = spyOn(accountService, 'userUpdate').and.callThrough();
    component.submitName();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });


  it('should enable name editing', () => {
    spyOn(component, 'enableNameForm').and.callThrough;
    component.enableNameForm();
    expect(component.accountName).toBe(true);
  });

  it('should enable password editing', () => {
    spyOn(component, 'enablePasswordForm').and.callThrough;
    component.enablePasswordForm();
    expect(component.accountPassword).toBe(true);
  });

  it('should enable address editing', () => {
    component.enableAddressForm();
    expect(component.accountAddress).toBe(false);
  });

  it('should submit new password through account service', () => {
    const accountService = fixture.debugElement.injector.get(AccountService);
    const mySpy = spyOn(accountService, 'userUpdate').and.callThrough();
    component.newPassword = component.repeatPassword = 'Test1234?';
    component.submitPassword();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });

  it('should submit new address through account service', () => {
    const accountService = fixture.debugElement.injector.get(AccountService);
    const mySpy = spyOn(accountService, 'userUpdate').and.callThrough();
    component.submitAddress();
    expect(mySpy).toHaveBeenCalledTimes(1);
  });
});
