import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as InviteActions from 'src/app/Store/Actions/invite.actions';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor (private store:Store) {}
  invite(){
    this.store.dispatch(InviteActions.showInvite());
  }
}
