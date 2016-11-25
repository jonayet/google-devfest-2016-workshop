import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {IUser} from './IUser';

@Component({
    selector: 'todo-list',
    templateUrl: './view.html'
})
export class PromptUserComponent {
    user: IUser;

    constructor(private router: Router, private snackBar: MdSnackBar) {
        this.user = {
            id: '',
            name: ''
        }
    }

    createUser(){
        this.user.id = this.user.name.replace(/\s/g, '-').toLowerCase();
        this.router.navigate(['/', this.user.id]);
    }
}