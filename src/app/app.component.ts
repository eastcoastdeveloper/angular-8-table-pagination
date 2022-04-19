import { Component } from '@angular/core';
import * as data from './cars.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars: any = [];
  data: any = data;

  constructor() {
    for (let key in data.muscleCars) {
      if (data.muscleCars.hasOwnProperty(key)) {
        this.cars.push(data.muscleCars[key]);
      }
    }
  }
}
