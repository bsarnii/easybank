import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHomeComponent } from './home-home/home-home.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HomeHomeComponent, HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeHomeComponent]
})
export class HomeModule { }
