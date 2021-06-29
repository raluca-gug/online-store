import { Product } from '../../core/models/product';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as ProductActions from "./favorite.actions";


export interface FavoriteState {
    products: Product[]
}

const initialState:FavoriteState={products: []}

const getFavoriteFeatureState = createFeatureSelector<FavoriteState>('favorite');

export const getProducts = createSelector(
    getFavoriteFeatureState,
    state => state.products
)

export const favoriteReducer = createReducer(
    initialState,
    on(ProductActions.addProduct, (state, action): FavoriteState => {
        if (state.products.includes(action.product)) return state;
        return {
           ...state,
           products: [...state.products, action.product],
        }
    }),
    on(ProductActions.removeProduct, (state, action): FavoriteState => {
        return {
           ...state,
           products: [...state.products.filter(el => el.id != action.product.id)],
        }
    })
)