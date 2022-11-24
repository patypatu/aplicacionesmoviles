import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal-qr',
  templateUrl: './modal-qr.page.html',
  styleUrls: ['./modal-qr.page.scss'],
})
export class ModalQrPage implements OnInit {

  qrString: string = '' ;


  constructor(private modalCtrl: ModalController, public navCtrl: NavController, private navParams: NavParams
     ) { 

      const datosQr = {
        "asignatura": this.navParams.get('asignatura')['clase'],
        "nombre": this.navParams.get('nombre_docente')['name'],
        "rut": this.navParams.get('rut_docente')['rut'],
        "fecha": this.navParams.get('fecha')['fecha'],
        "sala": this.navParams.get('sala')['sala'],
        "hora": this.navParams.get('hora')['horario']
      }
      console.log(datosQr);

      const qrServer = 'https://api.qrserver.com/v1/create-qr-code/';
      const size = '?size=254x254';
      const data = '&data=' + encodeURIComponent(JSON.stringify(datosQr));
      

      this.qrString = qrServer + size + data;
  
    }

  ngOnInit() {

  }


  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  

}
