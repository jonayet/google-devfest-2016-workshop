require('./style.css');
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {ITodoItem} from './../todo-item/ITodoItem';
import {TodoItemComponent} from './../todo-item/component';

@Component({
    selector: 'todo-list',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class TodoListComponent implements OnInit {
    dialogRef: MdDialogRef<TodoItemComponent>;
    todoItems: ITodoItem[];

    constructor(private route: ActivatedRoute, public dialog: MdDialog, private snackBar: MdSnackBar) {
        this.todoItems = [
            {
                id: "1",
                title: "Todo 1",
                description: "Todo 1 desc",
                isDone: false
            },
            {
                id: "2",
                title: "Todo 2",
                description: "Todo 2 desc",
                isDone: true
            },
            {
                id: "3",
                title: "Todo 3",
                description: "Todo 3 desc",
                isDone: false
            }
        ]
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            console.log(params['userId']);
        });
    }

    onTodoItemStateChange(todoItem, $event){
        todoItem.isDone = $event.checked;
        //this.snackBar.open('Todo item updated.', 'CLOSE');
    }

    addTodoItem(){
        this.dialogRef = this.dialog.open(TodoItemComponent);
        this.dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.todoItems.push(result);
                this.snackBar.open('New todo item created.', 'CLOSE');
            }
            this.dialogRef = null;
        });
    }
}