import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { YOUTUBE_VIDEOS_SEARCH, YOUTUBE_VIDEOS_PAGE_TOKEN } from './../constants/urls';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(
    private httpService: HttpService
  ) { }

  getVideosBySearch(q: string): Observable<any> {
    return this.httpService.get(`${YOUTUBE_VIDEOS_SEARCH}/${q}`);
  }

  getVideosByPageToken(pageToken: string): Observable<any>  {
    return this.httpService.get(`${YOUTUBE_VIDEOS_PAGE_TOKEN}/${pageToken}`);
  }
}
