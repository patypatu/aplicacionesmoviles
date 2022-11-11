import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RecuperarClaveService {

  constructor(private httpClient: HttpClient) { }

  recuperarClave(rut: any): Promise<any>{
    return new Promise ((resolve,reject)=>{
      this.httpClient.post<any>(`${URL}/api/recuperar-clave`,{
        rut
      })
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });

  }


}
