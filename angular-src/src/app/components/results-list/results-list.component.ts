import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  @Input() public results: any;
  @Input() public isPopular: boolean;

  constructor(
    private router: Router
  ) {
    this.isPopular = false;
  }

  watch(v: string): void {
    this.router.navigate(['/watch'], { queryParams: { v: v } });
  }
}
