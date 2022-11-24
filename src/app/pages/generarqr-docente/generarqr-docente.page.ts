import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalQrPage } from '../modal-qr/modal-qr.page';
import {format} from 'date-fns';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-generarqr-docente',
  templateUrl: './generarqr-docente.page.html',
  styleUrls: ['./generarqr-docente.page.scss'],
})
export class GenerarqrDocentePage implements OnInit {

  public name: string;
  public rut: string;
  tituloPagina = 'Generar QR';
  iconoEncabezado = 'qr-code-sharp';
  asignaturaDato: string;
  horaDato: string;
  salaDato: string;

  fecha = format(new Date(),'dd/MM/yyyy') ;


  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  cosa: string;

  asignaturaActual = undefined; 
  horarioActual = undefined;
  salaActual = undefined;
  valorAsignaturas = undefined;



  horas = [
    {
      horario: '19:15'
    },
    {
      horario: '20:40'
    },
    {
      horario: '21:20'
    }

  ];

  asignaturas =[
    {
    
    clase: 'Arquitectura'
  },
  {
    
    clase: 'Calidad de Software'
  },
  {
    
    clase: 'Aplicaciones Moviles'
  }
];

salas = [
  {
    sala: 'LC1'
  },
  {
    sala: 'LC2'
  },
  {
    sala: 'LC3'
  }

];


  constructor(private modalCtrl: ModalController, private miLocalStorage: LocalStorageService) {}

  

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalQrPage,
      componentProps: {
        asignatura: this.asignaturaDato,
        fecha: {fecha:this.fecha},
        hora: this.horaDato,
        sala: this.salaDato,
        nombre_docente: {name: this.name},
        rut_docente: {rut: this.rut}
      }
    });

    await modal.present();

    
  }
  

  ngOnInit() {
    this.name = localStorage.getItem('Name');       //  <---- Con esta linea, podemos obtener el nombre de usuario desde cualquier modulo.
    this.rut = this.miLocalStorage.getRut();
  }

}
