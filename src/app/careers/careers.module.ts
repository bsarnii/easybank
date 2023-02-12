import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersRoutingModule } from './careers-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CareersHomeComponent } from './careers-home/careers-home.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [
    CareersHomeComponent,
    WorkWithUsComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
