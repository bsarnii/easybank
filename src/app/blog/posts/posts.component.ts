import { Component } from '@angular/core';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { Post } from 'src/app/types/http-posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(private BlogPostsService:BlogPostsService){}

  listPosts!: Array<Post>;
  

  ngOnInit(){
    this.fetchPosts()
  }

  private fetchPosts(){
    this.BlogPostsService.getPosts().subscribe(data => {
      this.listPosts = data.response.data
    })
  }
}
