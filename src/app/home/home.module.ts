import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHomeComponent } from './home-home/home-home.component';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseCardsComponent } from './why-choose-cards/why-choose-cards.component';



@NgModule({
  declarations: [HomeHomeComponent, HeroComponent, WhyChooseCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeHomeComponent]
})
export class HomeModule { }
