import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { SharedModule } from './../shared-module/shared-module.module';
import { MaterialModule } from './../../modules/material/material.module';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';


@NgModule({
  declarations: [
    OrderComponent,
    PaymentFailureComponent,
    PaymentSuccessComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class OrderModule { }
