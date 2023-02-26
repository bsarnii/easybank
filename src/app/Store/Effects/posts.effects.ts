import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { BlogPostsService } from "src/app/services/blog-posts.service";
import { loadPosts, loadPostsSuccess } from "../Actions/posts.actions";

@Injectable()
export class PostsEffect{

    loadJobs$ = createEffect(() => this.action$.pipe(
        ofType(loadPosts),
        mergeMap(() =>
         this.postsService.getPosts().pipe(
            map((posts) => loadPostsSuccess({posts}))
        )
    ))
    )

    constructor(private action$: Actions, private postsService:BlogPostsService){}
}