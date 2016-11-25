import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.view.html',
    styleUrls: ['./app.style.css']
})
export class AppComponent {
    title: string = 'My Angular App';
    subtitle: string = 'from Angular 2 Quickstart';
    description: string = 'This is gonna be a super awesome web app!';
    constructor() {

    }
}