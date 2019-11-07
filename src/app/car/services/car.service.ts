import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Car } from "../../shared/modles/car";

@Injectable()
export class CarService {
  private cars: Car[] = [];
  private carsLoaded: boolean = false;
  constructor(
    
    private httpClient: HttpClient) {}

  async getCars(): Promise<Car[]> {
    if (this.carsLoaded) return this.cars.splice(0, 0);

    const carsList = await this.loadCars();
    this.cars = carsList;
    this.carsLoaded = true;   

    return this.cars.slice(0);
  }
  /**
   * @description
   * get the cars data
   */
  loadCars(): Promise<Car> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<Car>(
          "https://raw.githubusercontent.com/1bberto/car-rental/master/files/cars.json"
        )
        .subscribe(
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
