import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
  }

  create(post: any) {    
    return this.http.post(this.url, JSON.stringify(post))
  }

  update(post: any) {
    return this.http.patch(`${this.url}/${post.id}`, JSON.stringify(post))
  }

  delete(post: any) {
    return this.http.delete(`${this.url}/${post.id}`)
  }
}
