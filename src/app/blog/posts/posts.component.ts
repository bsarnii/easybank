import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Types/http-posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() posts!: Array<Post>;
}
