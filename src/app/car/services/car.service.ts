import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Car } from "../../shared/modles/car";


@Injectable()
export class CarService {
  private cars: Car[] = [];

  constructor(private httpClient: HttpClient) {

    this.loadCars().then((cars: Car[])=>{this.cars = cars});
   }

  getCars(): Car[]{
    return this.cars.splice(0,0);
  }
  /**
   * @description
   * get the cars data
   */
  private loadCars(): Promise<Car> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Car>("https://raw.githubusercontent.com/1bberto/car-rental/master/files/cars.json").subscribe(
        response => {
          resolve(response);
        },
        error => {
          console.log("Error:", error);
          reject(error);
        }
      );
    });
  }
}