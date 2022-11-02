import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';
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
    this.tableDataReq();
  }

  tableDataReq() {
    return this._http
      .get<CarsResponse[]>('assets/cars.json')
      .pipe(
        tap({
          next: (data: any) => {},
          error: (err: any) => console.log(err),
          complete: () => console.log('request successful')
        })
      )
      .subscribe((val) => {
        this.cars = val;
      });
  }
}
