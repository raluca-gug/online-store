import { AccountService } from 'src/app/core/services/account.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

fdescribe('AdminGuard', () => {
  let guard: AdminGuard;
  const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
  let accountSpy={isAuthenticated: true, isAdmin: true};
  let accountService: any;

  const dummyRoute = {} as ActivatedRouteSnapshot;


  function fakeRouterState(url: string): RouterStateSnapshot {
    return {
      url,
    } as RouterStateSnapshot;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: AccountService, useValue: accountSpy},
        {provide: Router, useValue: routerSpy}
      ]
    });
    guard = TestBed.inject(AdminGuard);
    accountService=TestBed.inject(AccountService)
  });

  it('should grant route access if user is logged in and admin', () => {
    accountService.isAdmin=true;
    accountService.isAuthenticated=true;

    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/service/admin')); 
    expect(canActivate).toEqual(true); 
  });

  it('should not grant route access if user is logged is not admin', () => {
    accountService.isAdmin=false;
    accountService.isAuthenticated=true;
    
    const canActivate = guard.canActivate(dummyRoute, fakeRouterState('/service/admin')); 
    expect(canActivate).toEqual(false); 
  });

  it('should navigate to / if user is not admin', () => {
    accountService.isAdmin=false;
    accountService.isAuthenticated=false;
    
    guard.canActivate(dummyRoute, fakeRouterState('/service/admin')); 
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']); 
  });
});
