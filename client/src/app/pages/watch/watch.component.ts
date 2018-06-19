import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import { YoutubeService } from '../../services/youtube.service';
import { SeoService } from '../../services/seo.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit, OnDestroy {
  public video: any;
  public loading: boolean;
  public paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      let v = params['v'];
      if (!v) {
        this.router.navigate(['/']);
      }
      this.getVideoDetails(v);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getVideoDetails(v: string): void {
    this.loading = true;

    this.youtubeService.getVideosDetailsById(v).subscribe(video => {
      this.video = video.items[0];
      this.loading = false;
      this.seoService.setTitle(this.video.snippet.title);
    });
  }
}
