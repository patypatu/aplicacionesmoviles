import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { RegistroDataService } from 'src/app/services/registro-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public name: string;
  tituloPagina = 'Home';
  iconoEncabezado = 'home';

  constructor(private activatedRoute: ActivatedRoute,private barcodeScanner: BarcodeScanner, 
    private registroDataservice: RegistroDataService) { }

  // ionViewWillEnter(){
  //   console.log('viewWillEnter');
  //   this.scan();
  // }

  scan(){
    //alert('Inicio');

      this.barcodeScanner.scan().then(barcodeData =>{
      console.log('barcode data ',barcodeData);
      //alert('Bar code data ='+barcodeData.text);

      const scanner = JSON.parse(barcodeData.text);
      //alert('Scanner: '+ JSON.stringify(scanner));

      const datoQR = this.registroDataservice.guardarRegistro(scanner).then(a=>a).catch(e=>false);
      
      alert('Su asistencia esta registrada');



    }).catch(err =>{
      console.log('Error',err);
      //alert(JSON.stringify(err));
    });
  }


  ngOnInit() {
    this.name = localStorage.getItem('Name');       //  <---- Con esta linea, podemos obtener el nombre de usuario desde cualquier modulo.

  }

}
