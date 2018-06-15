import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public q: string;
  public paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.q = null;
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.q = params['q'];
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onSearch(): void {
    if (this.q) {
      this.router.navigate(['/results'], { queryParams: { q: this.q }, queryParamsHandling: 'merge' });
    }
  }
}
