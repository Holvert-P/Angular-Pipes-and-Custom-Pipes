import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  isMayus: boolean = false;
  btnText: string = 'Mayusculas';

  orderBy: string = '';
  heroes: Heroe[] = [
    { nombre: 'Aquaman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.rojo },
    { nombre: 'Superman', vuela: false, color: Color.verde },
    { nombre: 'Flash', vuela: true, color: Color.negro },
  ];

  change() {
    this.isMayus
      ? (this.btnText = 'Mayusculas')
      : (this.btnText = 'Minúsculas');
    this.isMayus = !this.isMayus;
  }

  changeOrderBy(orderBy: string) {
    this.orderBy = orderBy;
  }
  constructor() {}

  ngOnInit(): void {}
}
