import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-iframe',
  templateUrl: './youtube-iframe.component.html',
  styleUrls: ['./youtube-iframe.component.scss']
})
export class YoutubeIframeComponent {
  @Input() public videoId: string;

  constructor() { }
}
