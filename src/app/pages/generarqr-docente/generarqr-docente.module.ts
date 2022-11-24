import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarqrDocentePageRoutingModule } from './generarqr-docente-routing.module';

import { GenerarqrDocentePage } from './generarqr-docente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarqrDocentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [GenerarqrDocentePage]
})
export class GenerarqrDocentePageModule {}
