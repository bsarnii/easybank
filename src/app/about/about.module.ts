import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutRoutingModule } from './about-routing.module';
import { AwardsComponent } from './awards/awards.component';
import { PiggyComponent } from './awards/piggy/piggy.component';
import { TrophyComponent } from './awards/trophy/trophy.component';
import { AwardIconComponent } from './awards/award-icon/award-icon.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutHomeComponent,
    AwardsComponent,
    PiggyComponent,
    TrophyComponent,
    AwardIconComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
})
export class AboutModule { }
