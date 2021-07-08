import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as Actions from './product-comments.actions';
import * as AppState from '../../../store/app.state';

export interface State extends AppState.State {
    commentsAndQA: CommentsAndQA;
  }

interface CommentsAndQA{
    comments: ProductComment[];
    questions: Questions[];
}

export interface Reply {
    id: string,
    userId: string,
    userName: string,
    text: string,
    date: Date,
    likesUsers: string[],
    dislikesUsers: string[]
}

export interface Questions {
    id: string,
    userId: string,
    text: string,
    date: Date,
    productId: String;
    reply: Reply[];
}
export interface ProductComment {
    id: string,
    productId: string,
    userId: string,
    comment: string,
    likesUsers: string[],
    dislikesUsers: string[]
}

let initialState: CommentsAndQA ={comments: [], questions: []};
if (localStorage.getItem('state')!==null) {
    if(JSON.parse(localStorage.getItem('state')!).comments){
        initialState={...initialState, comments: JSON.parse(localStorage.getItem('state')!).comments}
    }
    if(JSON.parse(localStorage.getItem('state')!).questions){
        initialState={...initialState, questions: JSON.parse(localStorage.getItem('state')!).questions,}
    }
} 

const getProductCommentFeatureState=createFeatureSelector<CommentsAndQA>('product-comments');

export const getComments=createSelector(
    getProductCommentFeatureState,
    state=>state.comments
)

export const getQuestions=createSelector(
    getProductCommentFeatureState,
    state=>state.questions
)

export const productCommentsReducer= createReducer(
    initialState,
    on (Actions.addComment, (state, action): CommentsAndQA => {
        let newState={
             ...state, 
             comments: [...state.comments, action.comment]
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.likeComment, (state, action): CommentsAndQA => {
        let newState={
            ...state,
            comments: state.comments.map(
                item => action.id === item.id ? {...item, likesUsers: [...item.likesUsers, action.userId]} : item)
        }
        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }),

    on (Actions.removeLikeComment, (state, action): CommentsAndQA => {
        let newState={
            ...state,
            comments: state.comments.map(
            item => action.id === item.id ? {...item, likesUsers: item.likesUsers.filter(el=> el!=action.userId)} : item)
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.dislikeComment, (state, action): CommentsAndQA => {
        let newState={
            ...state, 
            comments: state.comments.map(
            item => action.id === item.id ? {...item, dislikesUsers: [...item.dislikesUsers, action.userId]} : item)
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.removeDislikeComment, (state, action): CommentsAndQA => {
        let newState={
            ...state,
            comments: state.comments.map(
            item => action.id === item.id ? {...item, dislikesUsers: item.dislikesUsers.filter(el=> el!=action.userId)} : item)
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.addQuestion, (state, action): CommentsAndQA => {
        let newState={
            ...state, 
            questions: [...state.questions, action.question]
       }
       localStorage.setItem('state', JSON.stringify(newState))
       return newState;
    }),

    on (Actions.addReply, (state, action): CommentsAndQA => {
        let updatedQuestions=state.questions.map(el => el.id == action.questionId ? {...el, reply: [{...action.reply}, ...el.reply]} : el)
        let newState={
            ...state, 
            questions: updatedQuestions
       }
       localStorage.setItem('state', JSON.stringify(newState))
       return newState;
    }),

    on (Actions.likeReply, (state, action): CommentsAndQA => {
        let updatedQuestions=state.questions.map(el =>
            {return {...el, reply:  el.reply.map((item:any) => item.id===action.id ? {...item, likesUsers: [...item.likesUsers, action.userId]} : item)}}
            )
        let newState={
            ...state,
            questions: updatedQuestions
        }
        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }),

    on (Actions.dislikeReply, (state, action): CommentsAndQA => {
        let updatedQuestions=state.questions.map(el =>
            {return {...el, reply:  el.reply.map((item:any) => item.id===action.id ? {...item, dislikesUsers: [...item.dislikesUsers, action.userId]} : item)}}
            )
        let newState={
            ...state,
            questions: updatedQuestions
        }
        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
    }),

    on (Actions.removeLikeReply, (state, action): CommentsAndQA => {
        let updatedQuestions=state.questions.map(el =>
            {return {...el, reply:  el.reply.map((item:any) => item.id===action.id ? {...item, likesUsers: item.likesUsers.filter((elz: any)=> elz!=action.userId)} : item)}}
            )
        let newState={
            ...state,
            questions: updatedQuestions
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),

    on (Actions.removeDislikeReply, (state, action): CommentsAndQA => {
        let updatedQuestions=state.questions.map(el =>
            {return {...el, reply:  el.reply.map((item:any) => item.id===action.id ? {...item, dislikesUsers: item.dislikesUsers.filter((elz: any)=> elz!=action.userId)} : item)}}
            )
        let newState={
            ...state,
            questions: updatedQuestions
        }
        localStorage.setItem('state', JSON.stringify(newState))
        return newState;
    }),
)