import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { LocalStorageService } from './local-storage.service';



const URL = environment.url;

interface IRegistroAsistencia {
  rutEstudiante: string;
  asignatura: string;
  nombre: string;
  rut: string;
  fecha: string;
  hora: string;
  sala: string;

}

@Injectable({
  providedIn: 'root'
})
export class RegistroDataService {

  constructor(private httpClient: HttpClient,private miLocalStorage: LocalStorageService) { }

  //POST

  guardarRegistro(registroAsistencia: IRegistroAsistencia): Promise <any>{
    return new Promise ((resolve,reject)=>{
      this.httpClient.post<any>(`${URL}/registro/registro-asistencia`,{
        rut_estudiante: this.miLocalStorage.getRut(),
        nombre_estudiante: localStorage.getItem('Name'),
        nombre_docente: registroAsistencia.nombre,
        asignatura: registroAsistencia.asignatura,
        rut_docente: registroAsistencia.rut,
        fecha: registroAsistencia.fecha,
        hora: registroAsistencia.hora,
        sala: registroAsistencia.sala

      })
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });

  }

  //GET

  getAsistencia(asignatura: string):Promise<any>{
    return new Promise ((resolve,reject)=>{

      this.httpClient.get<any>(`${URL}/registro/asistencia?asignatura=`+asignatura)
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      },(err)=>{
        reject(err);
      });
     });

  }

  
  getDatos(){
    return this.httpClient.get(`${URL}/registro/asistencia?asignatura=Arquitectura`);
  }

  

}
