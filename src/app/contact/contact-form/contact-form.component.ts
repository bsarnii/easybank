import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: any = {firstname: "", lastname: "", email:"", message:""};
  contactForm: any;

  invalidSubmit = false;
  validSubmit: boolean = false;
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl(this.contact.firstname, [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastname: new FormControl(this.contact.lastname, [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]),
      message: new FormControl(this.contact.message, [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  };

  onSubmit(){
    if (this.contactForm.valid) {
      this.validSubmit = true;
    } else {
      this.invalidSubmit = true;
    }
  }

  get firstname() { return this.contactForm.get('firstname');}
  get lastname() { return this.contactForm.get('lastname');}
  get email() { return this.contactForm.get('email');}
  get message() { return this.contactForm.get('message');}
}
