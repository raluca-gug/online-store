import { createAction, props } from '@ngrx/store';
import { ProductComment } from './product-comments.reducer';

export const addComment = createAction(
    'product-comments/add new comment',
    props<{comment: ProductComment}>()
)

export const removeComment = createAction(
    'product-comments/remove comment',
    props<{id: string}>()
)

export const likeComment = createAction(
    'product-comments/like',
    props<{id: string, userId: string}>()
)

export const removeLikeComment = createAction(
    'product-comments/remove like',
    props<{id: string, userId: string}>()
)

export const dislikeComment = createAction(
    'product-comments/dislike',
    props<{id: string, userId: string}>()
)

export const removeDislikeComment = createAction(
    'product-comments/remove dislike',
    props<{id: string, userId: string}>()
)