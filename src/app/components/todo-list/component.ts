require('./style.css');
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ITodoItem} from './../todo-item/ITodoItem';
import {TodoItemComponent} from './../todo-item/component';

@Component({
    selector: 'todo-list',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class TodoListComponent implements OnInit {
    dialogRef: MdDialogRef<TodoItemComponent>;
    todoDb = this.angularFire.database.list('/todos');
    todoItems: ITodoItem[];

    constructor(private route: ActivatedRoute, public dialog: MdDialog, private snackBar: MdSnackBar, private angularFire: AngularFire) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {

        });

        this.todoDb.subscribe(todos => {
            this.todoItems = todos;
        });
    }

    onTodoItemStateChange(todoItem, $event){
        todoItem.isDone = $event.checked;
        this.todoDb.update(todoItem.$key, { isDone: todoItem.isDone });
        //this.snackBar.open('Todo item updated.', 'CLOSE');
    }

    addTodoItem(){
        this.dialogRef = this.dialog.open(TodoItemComponent);
        this.dialogRef.afterClosed().subscribe(result => {
            if(result) {
                //this.todoItems.push(result);
                this.todoDb.push(result);
                this.snackBar.open('New todo item created.', 'CLOSE');
            }
            this.dialogRef = null;
        });
    }
}