import { SharedModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { favoriteReducer } from './state/favorite.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteRoutingModule,
    StoreModule.forFeature('favorite', favoriteReducer),
  ]
})
export class FavoriteModule { }
