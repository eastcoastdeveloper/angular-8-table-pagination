import { Component } from '@angular/core';
import { CarsResponse } from './cars.interface';
import * as data from './cars.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars: CarsResponse[] = [];
  data: any = data;
  p: any;
  totalVehicles = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.cars.length);
    }, 1000);
  });

  constructor() {
    for (let key in data.muscleCars) {
      this.cars.push(data.muscleCars[key]);
    }
  }
}
