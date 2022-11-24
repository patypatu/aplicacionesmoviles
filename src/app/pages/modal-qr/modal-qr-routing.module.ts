import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalQrPage } from './modal-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ModalQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalQrPageRoutingModule {}
