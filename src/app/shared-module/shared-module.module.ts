import { RatingModule } from 'ng-starrating';
import { ProductItemComponent } from './product-item/product-item.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
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
import { BikeDetailsDirective } from './bike-details/bike-details.directive';
import { HighlightOnClickDirective } from './highlight-on-click/highlight-on-click.directive';
import { ScrollCatcherDirective } from './scroll-catcher/scroll-catcher.directive';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    NavbarComponent,
    HighlightDirective,
    BikeDetailsDirective,
    HighlightOnClickDirective,
    ScrollCatcherDirective,
    FilterProductPipe, 
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    MaterialModule,
    RouterModule,
    RatingModule,
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
    HighlightDirective,
    BikeDetailsDirective,
    HighlightOnClickDirective,
    ScrollCatcherDirective, 
    FilterProductPipe,
    ProductItemComponent
  ]
})
export class SharedModule { }
