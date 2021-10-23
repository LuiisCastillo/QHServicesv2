import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'registro-usuario',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'update-usuario/:id',
    loadChildren: () => import('./update-usuario/update-usuario.module').then( m => m.UpdateUsuarioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro-paciente',
    loadChildren: () => import('./registro-paciente/registro-paciente.module').then( m => m.RegistroPacientePageModule)
  },
  {
    path: 'update-paciente/:id',
    loadChildren: () => import('./update-paciente/update-paciente.module').then( m => m.UpdatePacientePageModule)
  },
  {
    path: 'rayos-x',
    loadChildren: () => import('./rayos-x/rayos-x.module').then( m => m.RayosXPageModule)
  },
  {
    path: 'asignar-paciente/:id',
    loadChildren: () => import('./asignar-paciente/asignar-paciente.module').then( m => m.AsignarPacientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
