import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { InviteModule } from './invite/invite.module';
import { CareersModule } from './careers/careers.module';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookIconComponent } from './footer/facebook-icon/facebook-icon.component';
import { YoutubeIconComponent } from './footer/youtube-icon/youtube-icon.component';
import { TwitterIconComponent } from './footer/twitter-icon/twitter-icon.component';
import { PinterestIconComponent } from './footer/pinterest-icon/pinterest-icon.component';
import { InstagramIconComponent } from './footer/instagram-icon/instagram-icon.component';


import { HttpJobsService } from './services/http-jobs.service';
import { StoreModule } from '@ngrx/store';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BlogPostsService } from './services/blog-posts.service';
import { EffectsModule } from '@ngrx/effects';
import { jobsReducer } from './Store/Reducers/jobs.reducers';
import { JobsEffect } from './Store/Effects/jobs.effect';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacebookIconComponent,
    YoutubeIconComponent,
    TwitterIconComponent,
    PinterestIconComponent,
    InstagramIconComponent,
    ErrorPageComponent,
  ],
  imports: [
    StoreModule.forRoot({jobs: jobsReducer}),
    BrowserModule,
    HttpClientModule,
    AboutModule,
    HomeModule,
    SharedModule,
    ContactModule,
    BlogModule,
    CareersModule,
    InviteModule,
    AppRoutingModule,
    EffectsModule.forRoot([JobsEffect]),
  ],
  providers: [HttpJobsService, BlogPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
