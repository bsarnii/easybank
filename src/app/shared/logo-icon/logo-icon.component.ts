import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-icon',
  templateUrl: './logo-icon.svg',
  styles: ['']
})
export class LogoIconComponent {
@Input() color:String = "#2D314D";
}
