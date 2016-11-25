/**
 * Created by jonayet on 11/25/16.
 */
import {Component, Optional} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'news-feed',
    template: `
    <md-card>
        <md-card-title>News Feed Component</md-card-title>
        <md-card-content>
            <p>Your friend is celebrating her birthday.</p>
        </md-card-content>
        <md-card-actions>
            <button md-button (click)="onLikeClicked()">LIKE</button>
            <button md-button (click)="onShareClicked()">SHARE</button>
        </md-card-actions>
    </md-card>
  `
})
export class NewsFeedContent {
    constructor(private snackbar: MdSnackBar) {

    }

    onLikeClicked(){
        this.snackbar.open('You liked that!', 'CLOSE');
    }

    onShareClicked(){
        this.snackbar.open('You shared that!', 'CLOSE');
    }
}