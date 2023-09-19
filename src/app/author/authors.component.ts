import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";

@Component({
    selector: 'authors',
    templateUrl: './authors.components.html'
})
export class AuthorsComponent {
    authors;
    constructor(authorService: AuthorsService) {
        this.authors = authorService.getAuthors()
    }
}