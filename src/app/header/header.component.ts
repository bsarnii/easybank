import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as InviteActions from 'src/app/invite/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  open = false;
  hamburgerOrClose = "assets/images/icon-hamburger.svg"
   isOpen(){
    this.open = !this.open;
    this.hamburgerOrClose = this.open === false ? "assets/images/icon-hamburger.svg" : "assets/images/icon-close.svg";
  }

  // Store invite
  constructor (private store:Store) {}
  invite(){
    this.store.dispatch(InviteActions.showInvite());
  }
}
