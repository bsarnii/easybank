import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostsResponse } from 'src/app/Store/Selectors/posts.selectors';
import { Post } from 'src/app/types/http-posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor( private store:Store){}
  
  posts$!: Observable<Post[] | undefined>

  ngOnInit(){
    this.posts$ = this.store.pipe(select(getPostsResponse))
  }
}
