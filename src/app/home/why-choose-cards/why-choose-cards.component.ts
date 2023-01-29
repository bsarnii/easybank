import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-cards',
  templateUrl: './why-choose-cards.component.html',
  styleUrls: ['./why-choose-cards.component.css']
})
export class WhyChooseCardsComponent {
  cards = 
  [
    {
      heading: "Online Banking",
      paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      picture: "assets/images/icon-online.svg"
    },
    {
      heading: "Simple Budgeting",
      paragraph: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
      picture: "assets/images/icon-budgeting.svg"
    },
    {
      heading: "Fast Onboarding",
      paragraph: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      picture: "assets/images/icon-onboarding.svg"
    },
    {
      heading: "Open API",
      paragraph: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      picture: "assets/images/icon-api.svg"
    },

  ]
}
