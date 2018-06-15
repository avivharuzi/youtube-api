import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { YOUTUBE_VIDEOS_SEARCH, YOUTUBE_VIDEOS_PAGE_TOKEN } from './../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(
    private httpService: HttpService
  ) { }

  getVideosBySearch(q: string): any {
    return this.httpService.get(`${YOUTUBE_VIDEOS_SEARCH}/${q}`);
  }

  getVideosByPageToken(pageToken: string): any {
    return this.httpService.get(`${YOUTUBE_VIDEOS_PAGE_TOKEN}/${pageToken}`);
  }
}
