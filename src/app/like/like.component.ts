import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent  {
  @Input('likesCount') likes: number = 0
  @Input('isLiked') isToggle: boolean = false

  constructor() { }

  onClick() {
    this.isToggle = !this.isToggle
    this.likes += !this.isToggle ? -1 : 1
  }
  
}
