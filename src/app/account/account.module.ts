import { SharedModule } from './../shared-module/shared-module.module';
import { RatingModule } from 'ng-starrating';
import { OrderItemComponent } from './user-details/order-item/order-item.component';
import { MyOrdersComponent } from './user-details/my-orders/my-orders.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from '../../modules/material/material.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    MaterialModule,
    RatingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    NewPasswordComponent,
    ConfirmAccountComponent,
    UserDetailsComponent,
    MyOrdersComponent,
    OrderItemComponent,
  ],
  exports: [TranslateModule],
})
export class AccountModule {}
