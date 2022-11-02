import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarsResponse } from './cars.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars: CarsResponse[] = [];
  p: any;

  constructor(private _http: HttpClient) {
    this._http.get<CarsResponse[]>('assets/cars.json').subscribe((val) => {
      this.cars = val;
      console.log(this.cars);
    });
  }
}
