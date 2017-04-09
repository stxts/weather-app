import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { App } from './app';

@Injectable()
export class AppService {

  private testUrl = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=';
  private apiKey = '&appid=6cc3e287c4cede83bd9e993a2aaf7923'
  private units = '&units=imperial'

  // dependency injection
	constructor(
		private http: Http
	){}

  getCurrentWeather(city): Observable<App>{
    return this.http.get(this.testUrl + city + this.units + this.apiKey)
               .map((response: Response) => <App>response.json());
  }	

  
}