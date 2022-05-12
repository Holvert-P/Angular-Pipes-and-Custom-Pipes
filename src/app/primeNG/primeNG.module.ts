import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    CardModule,
    ToolbarModule,
    TableModule,
    CheckboxModule,
  ],
})
export class PrimeNGModule {}
