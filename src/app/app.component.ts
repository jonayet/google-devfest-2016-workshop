import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.view.html',
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    title: string = 'TODO App';
    subtitle: string = 'Create your TODO';
    description: string = 'This project is created for Google DevFest 2016 for Designing Modern Web Apps using Angular 2 & Firebase workshop';
    constructor() {

    }
}