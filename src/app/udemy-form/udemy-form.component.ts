import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.scss']
})
export class UdemyFormComponent  {
  categories = [
    { id: 1, name: 'Development'},
    { id: 2, name: 'Art'},
  ]
  constructor() { }

  submit(f: any) {
    console.log(f.value)
  }

}
