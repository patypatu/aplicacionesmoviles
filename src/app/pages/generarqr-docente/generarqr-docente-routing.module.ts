import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarqrDocentePage } from './generarqr-docente.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarqrDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarqrDocentePageRoutingModule {}
