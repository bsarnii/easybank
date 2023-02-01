import { Component } from '@angular/core';

@Component({
  selector: 'youtube-icon',
  templateUrl: './youtube-icon.svg',
  styles: [
    'svg { display: inline-block; width: 26px; height: 25px; margin: 0 .5rem; }',
    'path { transition: fill .3s }',
    ':host:hover path { fill:var(--limeGreen); }'
  ]
})
export class YoutubeIconComponent {

}
