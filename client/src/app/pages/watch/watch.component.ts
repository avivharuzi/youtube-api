import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit, OnDestroy {
  public v: string;
  public paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.v = params['v'];
      if (!this.v) {
        this.router.navigate(['/']);
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
