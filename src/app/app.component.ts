import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.view.html',
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    title: string = 'TODO App';
    subtitle: string = 'Create your TODO';
    description: string = 'This project is created for Angular 2 with Material & Firebase workshop purpose';
    constructor() {

    }
}