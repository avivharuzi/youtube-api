// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Meta
import { seo } from './constants/seo';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent, data: seo.home },
  { path: 'results', component: ResultsComponent, data: seo.results },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent, data: seo.errorPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
