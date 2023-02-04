import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


import { HomeHomeComponent } from './home-home/home-home.component';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseCardsComponent } from './why-choose-cards/why-choose-cards.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [HomeHomeComponent, HeroComponent, WhyChooseCardsComponent, ArticlesComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
