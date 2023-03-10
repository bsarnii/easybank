import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


import { HomeHomeComponent } from './components/home-home/home-home.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyChooseCardsComponent } from './components/why-choose-cards/why-choose-cards.component';
import { ArticlesComponent } from './components/articles/articles.component';





@NgModule({
  declarations: [HomeHomeComponent, HeroComponent, WhyChooseCardsComponent, ArticlesComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
