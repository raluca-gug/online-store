import { RecommendedModule } from './../recommended/recommended.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared-module/shared-module.module';
import { MaterialModule } from './../../modules/material/material.module';
import { RatingModule } from 'ng-starrating';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsDialogComponent } from './product-details-dialog/product-details-dialog.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsDialogComponent,
    ProductListComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RatingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    RecommendedModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  
  entryComponents: [ProductDetailsDialogComponent],
})
export class ProductModule { }
