import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MdDialogRef, MdSnackBar} from '@angular/material';
import {ITodoItem} from './ITodoItem';

@Component({
    selector: 'todo-item',
    templateUrl: './view.html'
})
export class TodoItemComponent {
    todoItem: ITodoItem;

    constructor(private router: Router, private snackBar: MdSnackBar, public dialogRef: MdDialogRef<TodoItemComponent>) {
        this.todoItem = {
            id: '',
            title: '',
            description: '',
            isDone: false
        }
    }

    createTodoItem(){
        this.dialogRef.close(this.todoItem);
    }
}