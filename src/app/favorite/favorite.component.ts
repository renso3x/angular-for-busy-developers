import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean = false
  @Output('change') isCLicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite
    this.isCLicked.emit({ newValue: this.isFavorite })
  }
}
