import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteComponent } from './invite-component/invite.component';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [InviteComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('invite',reducers),
  ],
  exports:[InviteComponent]
})
export class InviteModule { }
