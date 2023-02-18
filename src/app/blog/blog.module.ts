import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { PostsComponent } from './posts/posts.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    BlogHomeComponent,
    PostsComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
