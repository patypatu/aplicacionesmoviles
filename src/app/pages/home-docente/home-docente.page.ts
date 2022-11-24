import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.page.html',
  styleUrls: ['./home-docente.page.scss'],
})
export class HomeDocentePage implements OnInit {
  public name: string;
  tituloPagina = 'Home Docente';
  iconoEncabezado = 'home';

  constructor(private barcodeScanner: BarcodeScanner) { }

 

  scan(){
    //alert('Inicio');
      this.barcodeScanner.scan().then(barcodeData =>{
      console.log('barcode data ',barcodeData);
      //alert('Bar code data ='+barcodeData.text);
    }).catch(err =>{
      console.log('Error',err);
      //alert(JSON.stringify(err));

    });
  }

  

  ngOnInit() {
    this.name = localStorage.getItem('Name');       //  <---- Con esta linea, podemos obtener el nombre de usuario desde cualquier modulo.
    
  }

}
