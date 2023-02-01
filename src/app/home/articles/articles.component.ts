import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = [
    {
      img:"assets/images/image-currency.jpg",
      author:"Claire Robinson",
      heading:"Receive money in any currency with no fees",
      paragraph:"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      img:"assets/images/image-restaurant.jpg",
      author:"Wilson Hutton",
      heading:"Treat yourself without worrying about money",
      paragraph:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      img:"assets/images/image-plane.jpg",
      author:"Wilson Hutton",
      heading:"Take your Easybank card wherever you go",
      paragraph:"We want you to enjoy your travels. This is why we don't charge any fees on purchases while your're aboard. We'll even show you...",
    },
    {
      img:"assets/images/image-confetti.jpg",
      author:"Claire Robinson",
      heading:"Our invite-only Beta accounts are now live!",
      paragraph:"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
    },
  ]
}
