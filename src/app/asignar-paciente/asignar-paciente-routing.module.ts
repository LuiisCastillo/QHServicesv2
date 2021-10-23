import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarPacientePage } from './asignar-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarPacientePageRoutingModule {}
