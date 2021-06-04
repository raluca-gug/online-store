import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OrderItemComponent } from './user-details/order-item/order-item.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'new-password', component: NewPasswordComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'userConfirmation',
        component: ConfirmAccountComponent,
        pathMatch: 'prefix',
      },
      { path: 'details', component: UserDetailsComponent },
      { path: 'order/:id', component: OrderItemComponent },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
})
export class AccountRoutingModule { }
