import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookIconComponent } from './footer/facebook-icon/facebook-icon.component';
import { YoutubeIconComponent } from './footer/youtube-icon/youtube-icon.component';
import { TwitterIconComponent } from './footer/twitter-icon/twitter-icon.component';
import { PinterestIconComponent } from './footer/pinterest-icon/pinterest-icon.component';
import { InstagramIconComponent } from './footer/instagram-icon/instagram-icon.component';
import { AppRoutingModule } from './app-routing.module';




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
    BrowserModule,
    AboutModule,
    HomeModule,
    SharedModule,
    AppRoutingModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
