import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface MyToken {
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  persistirLogin(res: any){
    localStorage.setItem('token',res.token);// <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden
    const token = jwt_decode<MyToken>(res.token);

    localStorage.setItem('Name',token.nombre);
    localStorage.setItem('decode_token',JSON.stringify(token));
    console.log(token);

  }
  limpiarStorage(){
    console.log('inicio');
    localStorage.removeItem('token');
    localStorage.removeItem('Name');
    localStorage.removeItem('decode_token');
    console.log('fin');
  }
  tieneToken(){
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getRole(){
   const token = JSON.parse(localStorage.getItem('decode_token'));
   return token.role;
  }

  getRut(){
    const token = JSON.parse(localStorage.getItem('decode_token'));
    return token.rut;
   }
}
