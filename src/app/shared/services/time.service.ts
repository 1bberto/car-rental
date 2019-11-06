import { EventEmitter } from '@angular/core';

export class TimeService {

  public dateTime = new EventEmitter<Date>();

  constructor() {
    setInterval(()=>{
      this.dateTime.emit(new Date());
    });
  }

}