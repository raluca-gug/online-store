import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('AuthGuard', () => {
  let guard: AuthGuard;
  const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
  let accountSpy={isAuthenticated: true};
  let accountService:any;
  
  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: Router, useValue: routerSpy}, {provide: AccountService, useValue: accountSpy}]
    });
    guard = TestBed.inject(AuthGuard);
    accountService=TestBed.inject(AccountService)
  });

  it('should be true if user is logged in', () => {
    accountService.isAuthenticated=true;

    expect(guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('/cart'))).toEqual(true);
  });

  it('should be false if user is not logged in', () => {
    accountService.isAuthenticated=false;

    expect(guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('/cart'))).toEqual(false);
  });

  it('should navigate to /account/login if user is not logged in', () => {
    accountService.isAuthenticated=false;
    guard.canActivate({} as ActivatedRouteSnapshot, fakeRouterState('/cart'));

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/account/login']);
  });


});
