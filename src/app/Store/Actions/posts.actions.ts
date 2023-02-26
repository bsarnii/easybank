import { createAction, props } from "@ngrx/store";
import { Posts } from "../../types/http-posts.interface";

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction("[Posts] Load posts success",
    props<{ posts:Posts }>()
);
