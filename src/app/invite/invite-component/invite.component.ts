import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as InviteActions from '../store/actions';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent{

  constructor(private store: Store) {}

  hideInvite(){
    this.store.dispatch(InviteActions.hideInvite());
  }

}
