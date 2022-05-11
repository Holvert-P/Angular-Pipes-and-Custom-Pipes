import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-nocomunes',
  templateUrl: './nocomunes.component.html',
  styles: [],
})
export class NocomunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Holvert';
  genero: string = 'masculino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Ana',
    'José',
    'Luis',
    'Carlos',
  ];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  changePerson() {
    this.genero === 'masculino'
      ? ((this.genero = 'femenino'), (this.nombre = 'Ana'))
      : ((this.genero = 'masculino'), (this.nombre = 'Holvert'));
  }

  deletePerson() {
    this.clientes.pop();
  }

  // keyValue Pipe

  persona = {
    nombre: 'Alex',
    edad: 20,
    direccion: 'calle falsa 123',
  };

  // jsonPipe

  heroes = [
    { nombre: 'Aquaman', poder: 'La capacidad de volar' },
    { nombre: 'Batman', poder: 'El poder de batir' },
    { nombre: 'Superman', poder: 'El poder de volar' },
    { nombre: 'Flash', poder: 'El poder de velocidad' },
  ];

  // Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ya esta la data');
    }, 3000);
  });
  constructor() {}

  ngOnInit(): void {}
}
