import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(
    private httpService: HttpService
  ) { }
}
