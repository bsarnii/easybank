import { createReducer, on } from "@ngrx/store";
import { Posts } from "../../types/http-posts.interface";
import { loadPostsSuccess } from "../Actions/posts.actions";

export interface PostsState{
    posts: Posts | null;
}

export const initialState: PostsState = {
    posts: null
}

export const postsReducer = createReducer(initialState,
     on(loadPostsSuccess,(state,{posts}) => ({...state, posts})),
     );