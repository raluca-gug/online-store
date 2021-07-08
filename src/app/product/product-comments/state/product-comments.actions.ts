import { createAction, props } from '@ngrx/store';
import { ProductComment, Questions, Reply } from './product-comments.reducer';

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

export const addQuestion = createAction(
    'product-commnets/ add question',
    props<{question: Questions}>()
)

export const addReply = createAction (
    'product-comments/ add reply',
    props<{reply: Reply, questionId: string}>()
)

export const likeReply = createAction (
    'product-comments/like reply',
    props<{id: string, userId: string}>()
)

export const removeLikeReply = createAction (
    'product-comments/remove like reply',
    props<{id: string, userId: string}>()
)

export const dislikeReply = createAction (
    'product-comments/dislike reply',
    props<{id: string, userId: string}>()
)

export const removeDislikeReply = createAction (
    'product-comments/remove dislike reply',
    props<{id: string, userId: string}>()
)