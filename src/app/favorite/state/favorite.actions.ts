import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product";

export const addProduct = createAction(
    'favorite/add',
    props<{ product: Product }>()
);

export const removeProduct = createAction(
    'favorite/remove',
    props<{ product: Product }>()
);