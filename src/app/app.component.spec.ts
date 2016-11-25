import { MaterialModule } from '@angular/material';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
                imports: [
                    MaterialModule.forRoot()
                ],
                declarations: [
                    AppComponent
                ]
            });
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});