import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/courses.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './author/authors.component';
import { AuthorsService } from './author/authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './titleCase.pipe';
import { LikeComponent } from './like/like.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordInputComponent } from './change-password-input/change-password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
