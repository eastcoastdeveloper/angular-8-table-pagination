import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarsResponse } from './cars.interface';
// import * as data from './cars.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  cars: any = [];
  // data: any = data;
  p: any;
  // totalVehicles: any = [];

  constructor(private _http: HttpClient) {
    // for (let key in data.muscleCars) {
    //   this.cars.push(data.muscleCars[key]);
    // }
    this._http.get('assets/cars.json').subscribe(val => {
      this.cars = val;
      console.log(this.cars)
    });
  }


  ngOnInit():void {

  }
}
