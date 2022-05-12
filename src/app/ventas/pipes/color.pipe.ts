import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interface';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  colores: string[] = ['azul', 'rojo', 'verde', 'negro'];
  transform(value: number): string {
    return this.colores[value];
  }
}
