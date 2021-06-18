import { RegisterComponent } from './register.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MatDialog, _MatDialogBase } from '@angular/material/dialog';
import { LeavePageDialogComponent } from './leave-page-dialog/leave-page-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<RegisterComponent> {
  constructor(public dialog: MatDialog){}
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty()) {
      let dialogRef=this.dialog.open(LeavePageDialogComponent, {
        data:  'By navigating away from this page you will lose your data. Are you sure?'
      })
      return dialogRef.afterClosed();
    }
    return true;
  }
  
}
