import { CartService } from './../../core/services/cart.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FavoriteActions from "./favorite.actions"
import { concatMap, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class FavoriteEffects {
    constructor(private actions$: Actions, private cartService: CartService) {}

    addToCart$= createEffect(() => {
        return this.actions$.pipe(
            ofType(FavoriteActions.addToCart),
            concatMap((action) => 
                this.cartService.addToCart(action.product, 1)
                .pipe (
                    map(product => FavoriteActions.removeFromFavorites({product}))
                )
            )
        )
    })
    
}