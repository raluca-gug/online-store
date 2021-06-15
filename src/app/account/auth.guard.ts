import { AccountService } from 'src/app/core/services/account.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):| Observable<boolean | UrlTree>| Promise<boolean | UrlTree> | boolean| UrlTree {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if (this.accountService.isAuthenticated) {
      return true;
    }
    this.accountService.redirectUrl = url;
    this.router.navigate(['/account/login']);
    return false;
  }
}
