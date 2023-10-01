import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ServicesService } from '../services/services.service';
import { AppError, BadInputError, NotFoundError } from '../services/app.error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = []

  constructor(private postService: ServicesService) { }

  ngOnInit() {
    this.postService.getAll()
      .subscribe((response:any) => {
        console.log(response)
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
      }, (error: AppError) => {
        if (error instanceof BadInputError) {
          // this.form.setErrors(error.json())
        } 
        else throw error;
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
    this.postService.delete(post.id)
      .pipe(
        map((response: any) => response), // Use your data structure if it's not 'any'
      )
      .subscribe(response => {
        console.log(response)
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      }, (error: AppError) => {
        if(error instanceof NotFoundError) {
          alert('This post has already been deleted')
        } 
        else throw error;
      })
  }
}
