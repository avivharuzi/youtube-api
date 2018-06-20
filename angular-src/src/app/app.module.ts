// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';

// Extra Modules
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';
import { ResultsComponent } from './pages/results/results.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { LogoComponent } from './components/logo/logo.component';
import { ThemeComponent } from './components/theme/theme.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchComponent,
    ResultsComponent,
    ResultsListComponent,
    LogoComponent,
    ThemeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    ErrorPageComponent,
    DefaultImageDirective,
    TruncatePipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BackToTopModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
