import { Component, OnInit } from '@angular/core';
import { RegistroDataService } from 'src/app/services/registro-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-asistencia-docente',
  templateUrl: './asistencia-docente.page.html',
  styleUrls: ['./asistencia-docente.page.scss'],
})
export class AsistenciaDocentePage implements OnInit {

  tituloPagina = 'Clases';
  iconoEncabezado = 'book';
  asignaturaDato: string;
  public name: string;

  //public registrosDatos: any = this.registroDataService() ;
  
  items: any[] = [];

  constructor(private registroDataService: RegistroDataService,private activatedRoute: ActivatedRoute,public navCtrl: NavController) { 

  }

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



  ngOnInit() {
    this.name = localStorage.getItem('Name');       //  <---- Con esta linea, podemos obtener el nombre de usuario desde cualquier modulo.

  }


filtroAsignatura(){

  this.registroDataService.getAsistencia(this.asignaturaDato['clase']).then(res => {
    console.log(res);
    if(res.ok === true && res.registros.length>0){
      console.log('PASO');
      this.items = res.registros;

    }else{
      this.items = [{'asignatura':'- -Sin datos'}]
    }
  }).catch(err=>{
    console.log(err);
    alert('error'+err);
  });

}

}


