import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersHomeComponent } from './careers-home/careers-home.component';


const routes: Routes = [
  { path: 'careers', component: CareersHomeComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class CareersRoutingModule { }
