import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as InviteActions from 'src/app/invite/store/actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor (private store:Store) {}
  invite(){
    this.store.dispatch(InviteActions.showInvite());
  }
}
