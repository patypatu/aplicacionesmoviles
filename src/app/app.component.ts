import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clases', url: '/registro-asistencia', icon: 'book' },
    { title: 'Cerrar Sesion', url: '/cerrar-sesion', icon: 'enter' },
  ];

  public appPagesDocente = [
    { title: 'Home Docente', url: '/home-docente', icon: 'home' },
    { title: 'Clases', url: '/asistencia-docente', icon: 'book' },
    { title: 'Cerrar Sesion', url: '/cerrar-sesion', icon: 'enter' },
  ];

  constructor() {}
}
