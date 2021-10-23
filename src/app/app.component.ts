import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Usuarios', url: '/registro-usuario', icon: 'person' },
    { title: 'Pacientes', url: '/registro-paciente', icon: 'people' },
    { title: 'Rayos X', url: '/rayos-x', icon: 'pulse' },
    { title: 'Laboratorio', url: '/folder/Laboratorio', icon: 'flask' },
    { title: 'Odontología', url: '/folder/Odontología', icon: 'happy' },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
