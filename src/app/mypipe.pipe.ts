import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { MONTH, YEAR } from 'ngx-bootstrap/chronos/units/constants';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
       
        return  ;

  }

}
