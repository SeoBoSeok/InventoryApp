import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datediff'})
export class DateDiffPipe implements PipeTransform {
  transform(value: string): number {
    let date = new Date(value);
    let today = new Date();

    var diff = today.valueOf() - date.valueOf();

    return diff;
  }
}