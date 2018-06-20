import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public videos: any;
  public loading: boolean;

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit() {
    this.getPopularVideos();
  }

  getPopularVideos(): void {
    this.loading = true;

    this.youtubeService.getPopularVideos().subscribe(videos => {
      this.videos = videos;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }
}
