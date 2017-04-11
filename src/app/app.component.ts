import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { App } from './app';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AppService ]
})
export class AppComponent {
	getData: string;
	@Input() city: string;
	app: App;
	mode = "Observable";

	constructor (private appService: AppService){}

	getCurrentWeather(city){
		this.appService.getCurrentWeather(city.value)
			.subscribe(
				app => this.app = app,
				error => alert(error),
				() => console.log("Finished")
				);
	}

}
