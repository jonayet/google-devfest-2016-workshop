import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import {TodoListComponent} from './components/todo-list/component';
import {PromptUserComponent} from './components/prompt-user/component';
import {TodoItemComponent} from './components/todo-item/component';
import {routes} from './app.router';
import {firebaseConfig} from './firebase.config';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        TodoItemComponent,
        PromptUserComponent,
        TodoListComponent,
        AppComponent
    ],
    entryComponents: [
        TodoItemComponent
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }