import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { YOUTUBE_VIDEOS_SEARCH, YOUTUBE_VIDEOS_PAGE_TOKEN, YOUTUBE_VIDEOS_DETAILS_BY_ID, YOUTUBE_VIDEOS_POPULAR } from './../constants/urls';

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

  getVideosByPageToken(q: string, pageToken: string): Observable<any>  {
    return this.httpService.get(`${YOUTUBE_VIDEOS_PAGE_TOKEN}/${q}/page/${pageToken}`);
  }

  getPopularVideos(): Observable<any> {
    return this.httpService.get(`${YOUTUBE_VIDEOS_POPULAR}`);
  }

  getVideosDetailsById(id: string): Observable<any>  {
    return this.httpService.get(`${YOUTUBE_VIDEOS_DETAILS_BY_ID}/${id}`);
  }
}
