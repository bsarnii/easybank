import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostsResponse } from 'src/app/Store/Selectors/posts.selectors';
import { Post } from 'src/app/types/http-posts.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor( private store:Store){}
  
  posts$!: Observable<Post[] | undefined>

  ngOnInit(){
    this.posts$ = this.store.pipe(select(getPostsResponse))
  }
}
