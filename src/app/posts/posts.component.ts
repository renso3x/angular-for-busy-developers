import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = []

  constructor(private postService: ServicesService) { }

  ngOnInit() {
    this.postService.getPosts()
      .pipe(
        map((response: any) => response), // Use your data structure if it's not 'any'
      )
      .subscribe((response) => {
        this.posts = response
      })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    
    this.postService.create(post)
      .pipe(
        map((response: any) => response), // Use your data structure if it's not 'any'
      )
      .subscribe(response => {
        post['id'] = response.id
        this.posts.splice(0, 0, post)
        console.log(response)
      })
  }

  updatePost(post: any) {
    this.postService.update({...post, isRead: true})
      .pipe(
        map((response: any) => response), // Use your data structure if it's not 'any'
      )
      .subscribe(response => {
        console.log(response)
      })
  }

  deletePost(post: any) {
    this.postService.delete(post)
      .pipe(
        map((response: any) => response), // Use your data structure if it's not 'any'
      )
      .subscribe(response => {
        console.log(response)
      })
  }

}
