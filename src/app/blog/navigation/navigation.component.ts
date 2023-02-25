import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Types/http-posts.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input()posts!: Array<Post>;
}
