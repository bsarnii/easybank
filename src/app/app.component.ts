import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showInviteSelector } from './Store/Selectors/invite.selectors';
import { AppStateInterface } from './Types/appstate.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invite$: Observable<boolean>

  constructor(private store: Store<AppStateInterface>) {
    this.invite$ = this.store.pipe(select(showInviteSelector))
  }

}
