import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NocomunesComponent } from './pages/nocomunes/nocomunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PrimeNGModule } from '../primeNG/primeNG.module';
import { MayusPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NocomunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
    MayusPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe,
  ],
  imports: [CommonModule, PrimeNGModule],
  exports: [
    NocomunesComponent,
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
  ],
})
export class VentasModule {}
