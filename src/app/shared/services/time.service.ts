import { EventEmitter } from '@angular/core';

export class TimeService {

  dateTime = new EventEmitter<Date>();

  constructor() {
    setInterval(()=>{
      this.dateTime.emit(new Date());
    });
  }

}