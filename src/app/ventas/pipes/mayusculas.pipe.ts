import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusPipe implements PipeTransform {
  transform(value: string, inMayus?: boolean): string {
    return inMayus ? value.toUpperCase() : value.toLowerCase();
  }
}
