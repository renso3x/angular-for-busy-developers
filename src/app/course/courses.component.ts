import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <h2>{{title}}</h2>
            <ul>
                <li *ngFor="let course of courses">{{ course }}</li>
            </ul>
            <input #email (change)="onChange(email.value)"  />
            <button (click)="onSave($event)">Save</button>

            <p>{{course.title | uppercase | summary:10 }}</p>
            <p>{{course.rating | number:'2.1-1' }}</p>
            <p>{{course.price | currency:'A$':true:'3.2-2' }}</p>
            <p>{{course.students | number }}</p>
            <p>{{ course.releaseDate | date:'shortDate' }}</p>
        </div>
    `
})
export class CourseComponent {
    title = 'List of title'
    courses;

    course = {
        title: 'Angular For Busy Developers',
        rating: 4.9821,
        students: 30123,
        price: 130.93,
        releaseDate: new Date(2012, 12, 5)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }
    onSave($event: any) {
        console.log("button was click", $event)
    }
    onDivClicked() {
        console.log('div was clicked')
    }
    onChange(value: any) {
        console.log(value)
    }
}