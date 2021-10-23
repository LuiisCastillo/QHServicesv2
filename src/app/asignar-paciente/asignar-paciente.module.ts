import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarPacientePageRoutingModule } from './asignar-paciente-routing.module';

import { AsignarPacientePage } from './asignar-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarPacientePageRoutingModule
  ],
  declarations: [AsignarPacientePage]
})
export class AsignarPacientePageModule {}
