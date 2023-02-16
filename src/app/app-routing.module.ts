import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [{path: '**', component:ErrorPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
