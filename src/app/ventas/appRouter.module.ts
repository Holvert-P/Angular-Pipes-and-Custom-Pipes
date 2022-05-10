import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NocomunesComponent } from './pages/nocomunes/nocomunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NocomunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  declarations: [],
  exports: [],
})
export class AppRouterModule {}
