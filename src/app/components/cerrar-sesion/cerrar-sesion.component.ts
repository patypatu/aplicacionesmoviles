import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MenuController } from '@ionic/angular';

@Component({
  template: ''
})
export class CerrarSesionComponent implements OnInit {

  constructor(private router: Router,private localStorageService: LocalStorageService, private menu: MenuController) { }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
 
    this.router.navigate(['/inicio']);
  }
  
  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
    try {
     
      if(this.localStorageService.getRole() === 'docente'){
        this.menu.enable(false,'menu-docente');
      }else{
        this.menu.enable(false,'menu-estudiante');
      }
      this.localStorageService.limpiarStorage();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {

  }

}
