import { AccountService } from 'src/app/core/services/account.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( 
    private accountService: AccountService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAdmin();
  }
  
  checkIfAdmin() {
    if(this.accountService.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
