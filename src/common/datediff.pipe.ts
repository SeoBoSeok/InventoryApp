import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(value: string): number {
    let date = new Date(value);
    let today = new Date();

    // var diff = today.valueOf() - date.valueOf();

    return Math.abs(this.daysBetween(today, date));
  }

  daysBetween( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
  }
}