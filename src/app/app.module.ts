import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './appRouter.module';

// primeNg

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VentasModule, SharedModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
