import { Component, OnInit } from '@angular/core';

import { Car } from '../../shared/models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[] = [];

  constructor(private carService: CarService) { }

  async ngOnInit() {
    this.carList = await this.carService.getCars();    
  }

}