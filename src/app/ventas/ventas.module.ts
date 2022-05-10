import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NocomunesComponent } from './pages/nocomunes/nocomunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';

@NgModule({
  declarations: [
    NocomunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
  ],
  imports: [CommonModule],
  exports: [
    NocomunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
  ],
})
export class VentasModule {}
