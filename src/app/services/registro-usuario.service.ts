/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {


  constructor(private httpClient: HttpClient) { }

  //POST registro de usuario
  registrarUsuario(rut: any, nombre: any, apellido: any, correo: any,password: any ): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post<any>(`${URL}/api/crea_usuario`,{
        rut,
        nombre,
        apellido,
        email: correo,
        password
      })
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      } ,(err) => {
        reject(err);
      });
    });
  };
}
