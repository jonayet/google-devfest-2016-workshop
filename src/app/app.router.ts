import { Routes } from '@angular/router';
import {TodoListComponent} from './components/todo-list/component';
import {PromptUserComponent} from './components/prompt-user/component';

export const routes: Routes = [
    { path: '**',  component: TodoListComponent },
    //{ path: '**', component: PromptUserComponent }
];