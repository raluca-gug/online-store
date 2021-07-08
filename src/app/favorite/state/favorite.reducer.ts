import { Product } from '../../core/models/product';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as ProductActions from "./favorite.actions";


export interface FavoriteState {
    products: Product[]
}


let initialState:FavoriteState;
if(JSON.parse(localStorage.getItem("favorites")!)!==null) initialState={products: JSON.parse(localStorage.getItem("favorites")!) }
else initialState= {products: [] }

const getFavoriteFeatureState = createFeatureSelector<FavoriteState>('favorite');

export const getProducts = createSelector(
    getFavoriteFeatureState,
    state => state.products
)

export const favoriteReducer = createReducer(
    initialState,
    on(ProductActions.addToFavorites, (state, action): FavoriteState => {
        if (state.products.includes(action.product)) return state;
        let newState= {
            ...state,
            products: [...state.products, action.product],
         }
        localStorage.setItem('favorites', JSON.stringify(newState.products))
        return newState;
    }),
    on(ProductActions.removeFromFavorites, (state, action): FavoriteState => {
        let newState={
            ...state,
            products: [...state.products.filter(el => el.id !== action.product.id)],
         }
        localStorage.setItem('favorites', JSON.stringify(newState.products))
        return  newState
    })
)