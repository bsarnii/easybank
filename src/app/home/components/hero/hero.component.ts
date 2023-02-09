import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HomeActions from '../../store/actions';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor (private store:Store) {}
  invite(){
    this.store.dispatch(HomeActions.showInvite());
  }
}
