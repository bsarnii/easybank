import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from 'src/app/services/blog-posts.service';
import { Post } from 'src/app/types/http-posts.interface';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

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
