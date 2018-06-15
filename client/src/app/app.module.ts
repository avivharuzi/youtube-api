// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { MessageModule } from './modules/message/message.module';
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';
import { LoadingModule } from './modules/loading/loading.module';
import { PictureModule } from './modules/picture/picture.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UcwordsPipe } from './pipes/ucwords.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    DefaultImageDirective,
    CapitalizePipe,
    UcwordsPipe,
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
    MessageModule.forRoot(),
    BackToTopModule.forRoot(),
    LoadingModule.forRoot(),
    PictureModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
