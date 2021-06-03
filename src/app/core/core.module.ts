import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterceptorInterceptor } from './interceptors/app-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LanguageInterceptor } from './interceptors/language-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
