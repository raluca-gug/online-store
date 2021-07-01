import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as Actions from './product-comments.actions';
import * as AppState from '../../../store/app.state';

export interface State extends AppState.State {
    comments: ProductComment[];
  }

export interface ProductComment {
    id: string,
    productId: string,
    userId: string,
    comment: string,
    likesUsers: string[],
    dislikesUsers: string[]
}

let initialState: ProductComment[];
if (localStorage.getItem('comments')!==null) initialState=JSON.parse(localStorage.getItem('comments')!)
else initialState = []

const getProductCommentFeatureState=createFeatureSelector<ProductComment[]>('product-comments');

export const getComments=createSelector(
    getProductCommentFeatureState,
    state=>state
)

export const productCommentsReducer= createReducer(
    initialState,
    on (Actions.addComment, (state, action): ProductComment[] => {
        let newState=[
             ...state, action.comment
        ]
        localStorage.setItem('comments', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.likeComment, (state, action): ProductComment[] => {
        let newState=state.map(
            item => action.id === item.id ? {...item, likesUsers: [...item.likesUsers, action.userId]} : item);
        localStorage.setItem('comments', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.removeLikeComment, (state, action): ProductComment[] => {
        let newState=state.map(
            item => action.id === item.id ? {...item, likesUsers: item.likesUsers.filter(el=> el!=action.userId)} : item);
        localStorage.setItem('comments', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.dislikeComment, (state, action): ProductComment[] => {
        let newState=state.map(
            item => action.id === item.id ? {...item, dislikesUsers: [...item.dislikesUsers, action.userId]} : item);
        localStorage.setItem('comments', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.removeDislikeComment, (state, action): ProductComment[] => {
        let newState=state.map(
            item => action.id === item.id ? {...item, dislikesUsers: item.dislikesUsers.filter(el=> el!=action.userId)} : item);
        localStorage.setItem('comments', JSON.stringify(newState))
        return newState;
    }),
)