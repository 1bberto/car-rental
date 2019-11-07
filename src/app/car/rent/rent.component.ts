import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RandomGeneratorService } from '../../shared/services/random-generator.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  carId: string;

  constructor(
    private randomGeneratorService: RandomGeneratorService,
    private ativatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ativatedRoute.params.subscribe((params)=>{      
      this.carId = this.randomGeneratorService.generateId();      
    });
  }

}