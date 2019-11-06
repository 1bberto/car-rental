import { Component, OnInit } from '@angular/core';


import { TimeService } from '../../shared/services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentDate: Date;
  constructor(private timeService: TimeService) { }

  ngOnInit() {

    this.timeService.dateTime.subscribe((date: Date)=>this.currentDate = date);
  }

}