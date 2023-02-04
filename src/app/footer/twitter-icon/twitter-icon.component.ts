import { Component } from '@angular/core';

@Component({
  selector: 'twitter-icon',
  templateUrl: './twitter-icon.svg',
  styles: [
    'path { transition: fill .3s }',
    ':host:hover path { fill:var(--limeGreen); }',
    'svg { display: inline-block; width: 25px; height: 25px; margin: 0 .5rem; }'
  ]
})
export class TwitterIconComponent {

}
