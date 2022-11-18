import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  //POST login de usuario
  login(usuario: any, password: any): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post<any>(`${URL}/api/login`,{
        rut: usuario,
        password
      })
      .subscribe(res =>{
        console.log(res);
        this.localStorageService.persistirLogin(res);
        resolve(res);
      } ,(err) => {
        console.log(err);
        console.log(err.error);
        reject(err);
      });
    });
  };


}
