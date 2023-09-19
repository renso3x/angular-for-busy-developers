import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/courses.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './author/authors.component';
import { AuthorsService } from './author/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
