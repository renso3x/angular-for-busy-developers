import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  isFavorite = true;

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  onChange(value: string) {
    return this.title = value
  }

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('favorite changed: ', eventArgs.newValue)
  }
}
