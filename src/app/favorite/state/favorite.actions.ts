import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product";

export const addToFavorites = createAction(
    'favorite/add to favorites',
    props<{ product: Product }>()
);

export const removeFromFavorites = createAction(
    'favorite/remove from favorites',
    props<{ product: Product }>()
);

export const addToCart = createAction(
    'favorite/add to cart',
    props<{ product: Product }>()
);