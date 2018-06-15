import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videos: any;
  public mainVideoId: string;
  public q: string;

  constructor(
    private httpService: HttpService
  ) {
    this.q = null;
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    const options = {
      key: 'AIzaSyB_7C3L2w67sHKVw6m9JKUmPmmu-p17m4o',
      part: 'snippet',
      q: this.q,
      maxResults: 50,
      type: 'video'
    };

    this.httpService.get('https://www.googleapis.com/youtube/v3/search', { params: options }).subscribe(videos => {
      this.videos = videos;
      this.mainVideoId = this.videos.items[0].id.videoId;
      console.log(this.videos);
    }, err => console.log(err));
  }

  getVideosNext(next: string): void {
    //
  }

  changeVideo(video: any): void {
    this.mainVideoId = video.id.videoId;
    window.scrollTo(0, 0);
  }
}
