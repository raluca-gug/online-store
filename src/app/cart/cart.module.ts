import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared-module.module';
import { MaterialModule } from './../../modules/material/material.module';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { RatingModule } from 'ng-starrating';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    RatingModule,
    CartRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class CartModule { }
