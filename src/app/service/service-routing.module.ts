import { AdminGuard } from './admin.guard';
import { AuthGuard } from './../account/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';

import { ServiceComponent } from './service.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'user',  canActivate: [AuthGuard], component: UserViewComponent },
  { path: 'admin', canActivate: [AdminGuard], component: AdminViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
