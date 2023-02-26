import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from "src/app/types/http-posts.interface";
import { getPostsResponse } from 'src/app/Store/Selectors/posts.selectors';
import { loadPosts } from 'src/app/Store/Actions/posts.actions';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  constructor( private store:Store){}
  
  posts$!: Observable<Post[] | undefined>


  ngOnInit(){
    this.store.dispatch(loadPosts())
    this.posts$ = this.store.pipe(select(getPostsResponse))
  }
    
}


