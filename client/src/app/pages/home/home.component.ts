import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videos: any;
  public mainVideoId: string;
  public q: string;
  public pageToken: string;
  public done: boolean;
  public loading: boolean;
  public loadingMain: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['q']) {
        this.q = params['q'];
      }
    });

    this.done = false;
    this.loading = false;
    this.loadingMain = true;
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    // this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { q: this.q }});
    this.loading = true;
    this.loadingMain = true;

    this.router.navigate(['.'], { queryParams: { q: this.q }, queryParamsHandling: 'merge' });

    this.youtubeService.getVideosBySearch(this.q).subscribe(videos => {
  
        this.videos = videos;
        console.log(this.videos);
        this.mainVideoId = this.videos.items[0].id.videoId;
        this.pageToken = this.videos.nextPageToken;
      
      this.loading = false;
      this.loadingMain = false;
    }, err => {
      this.loading = false;
      this.loadingMain = false;
    });
  }

  getVideosNext(): void {
    if (this.done) {
      return;
    }
    this.loading = true;

    this.youtubeService.getVideosByPageToken(this.pageToken).subscribe(videos => {
      if (videos.items.length) {
        console.log(videos);
        this.videos.items.push(...videos.items);
        console.log(this.videos);
        if (videos.nextPageToken) {
          this.pageToken = videos.nextPageToken;
        } else {
          this.done = true;
        }
      }

      this.loading = false;
    }, err => {
      this.loading = false;
    });
    // this.youtubeService.getVideosByPageToken(pageToken)
  }

  changeVideo(video: any): void {
    this.mainVideoId = video.id.videoId;
    window.scrollTo(0, 0);
  }
}
