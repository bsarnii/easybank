import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as InviteActions from '../store/actions';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit{
  invite:any = {email:""}
  inviteForm:any;

  isValid = false;

  constructor(private store: Store) {}

  ngOnInit():void{
    this.inviteForm = new FormGroup({
      email: new FormControl(this.invite.email, [
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ])
    })
  }
  
  save() {
    if (this.inviteForm.valid){
      this.isValid = true;
    }
    console.log(this.inviteForm.valid)
  }

  hideInvite(){
    this.store.dispatch(InviteActions.hideInvite());
  }
  get email() { return this.inviteForm.get('email');}
}
