import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-divider',
  templateUrl: './heading-divider.component.html',
  styleUrls: ['./heading-divider.component.css']
})
export class HeadingDividerComponent {
@Input() title:String = "";
}
