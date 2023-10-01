import { Injectable, Inject } from '@angular/core';
import { API_URL, DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) { 
    super(http, 'https://api.github.com/users/mosh-hamedani/followers')
  }
}
