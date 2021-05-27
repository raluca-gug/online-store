import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../modules/material/material.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HighlightDirective } from './highlight/highlight.directive';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    NavbarComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
    MaterialModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    NavbarComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
