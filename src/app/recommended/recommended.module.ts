import { ProductModule } from './../product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from './recommended/recommended.component';


@NgModule({
  declarations: [RecommendedComponent],
  imports: [
    CommonModule, 
    ProductModule,
  ],
  exports: [RecommendedComponent],
})
export class RecommendedModule { }
