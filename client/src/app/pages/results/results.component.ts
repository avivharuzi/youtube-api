import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import { YoutubeService } from '../../services/youtube.service';
import { SeoService } from '../../services/seo.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  public q: string;
  public results: any;
  public pageToken: string;
  public done: boolean;
  public loading: boolean;
  public mainLoading: boolean;
  public paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeService,
    private seoService: SeoService
  ) {
    this.done = false;
    this.loading = false;
    this.mainLoading = true;
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.q = params['q'];
      if (this.q) {
        this.getResults();
        this.seoService.setTitle(this.q + ' - Youtube Api');
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getResults(): void {
    this.loading = true;
    this.mainLoading = true;

    this.youtubeService.getVideosBySearch(this.q).subscribe(videos => {
      this.results = videos;
      this.pageToken = this.results.nextPageToken;
      this.loading = false;
      this.mainLoading = false;
      this.seoService.setTitle(this.q + ' - Youtube Api');
    }, err => {
      this.loading = false;
      this.mainLoading = false;
    });
  }

  getResultsNextPage(): void {
    if (this.done) {
      return;
    }

    this.loading = true;

    this.youtubeService.getVideosByPageToken(this.pageToken).subscribe(videos => {
      this.results.items.push(...videos.items);
      if (videos.nextPageToken) {
        this.pageToken = videos.nextPageToken;
      } else {
        this.done = true;
      }
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }
}
