import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombre: string = 'Juan';
  fecha: Date = new Date(); //dia de hoy
  constructor() {}

  ngOnInit(): void {}
}
