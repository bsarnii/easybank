import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Posts, Post } from "src/app/types/http-posts.interface";
import { PostsState } from "../Reducers/posts.reducers";

export const getPostsState = createFeatureSelector<PostsState>("posts");

export const getPosts = createSelector(getPostsState, (state) => state.posts);
export const getPostsResponse = createSelector(getPosts, (posts: Posts | null) => posts?.response.data);
