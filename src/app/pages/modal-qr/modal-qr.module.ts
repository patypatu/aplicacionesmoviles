import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalQrPageRoutingModule } from './modal-qr-routing.module';

import { ModalQrPage } from './modal-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalQrPageRoutingModule
    
  ],
  declarations: [ModalQrPage]
})
export class ModalQrPageModule {}
