import { SharedModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from './recommended/recommended.component';


@NgModule({
  declarations: [RecommendedComponent],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [RecommendedComponent],
})
export class RecommendedModule { }
