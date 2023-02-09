import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appstate.interface';
import * as HomeActions from '../../store/actions';
import { showInviteSelector } from '../../store/selectors';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {
  invite$: Observable<boolean>

  constructor(private store: Store<AppStateInterface>) {
    this.invite$ = this.store.pipe(select(showInviteSelector))
  }

  hideInvite(){
    this.store.dispatch(HomeActions.hideInvite());
  }
  ngOnInit(): void {
    this.store.dispatch(HomeActions.showInvite());
    console.log(this.invite$)
    this.store.dispatch(HomeActions.hideInvite());
  }
}
