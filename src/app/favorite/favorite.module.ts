import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { favoriteReducer } from './state/favorite.reducer';
import { StoreModule } from '@ngrx/store';
import { FavoriteEffects } from './state/favorite.effects';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoriteRoutingModule,
    StoreModule.forFeature('favorite', favoriteReducer),
    EffectsModule.forFeature([FavoriteEffects])
  ]
})
export class FavoriteModule { }
