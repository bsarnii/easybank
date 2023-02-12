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
  ],
  imports: [
    StoreModule.forRoot({}),
    BrowserModule,
    HttpClientModule,
    AboutModule,
    HomeModule,
    SharedModule,
    ContactModule,
    CareersModule,
    AppRoutingModule,
    InviteModule
  ],
  providers: [HttpJobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
