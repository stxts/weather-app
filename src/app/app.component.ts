import { Component, Input } from '@angular/core';
import { App } from './app';
import { AppService } from './app.service';
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


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

	constructor (private appService: AppService){}

	getCurrentWeather(city){
		this.appService.getCurrentWeather(city.value)
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
				() => console.log("Finished")
				);
	}

}
