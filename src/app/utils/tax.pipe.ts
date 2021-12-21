import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: number, isFood?: boolean ): number {
    return value * (isFood ? 1.07 : 1.19);
  }

}
