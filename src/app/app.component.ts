import { Component } from '@angular/core';
import { App } from './app';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	weatherOne: App = new App(123456, 'frisco')
}
