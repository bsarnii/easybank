import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as InviteActions from '../../Store/Actions/invite.actions';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit{
  @ViewChild('myInput') myInput!: ElementRef;

  ngAfterViewInit() {
      this.myInput.nativeElement.focus();
    }

  invite = {email:""}
  inviteForm: any;

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
  }

  hideInvite(){
    this.store.dispatch(InviteActions.hideInvite());
  }
  get email() { return this.inviteForm.get('email');}


}
