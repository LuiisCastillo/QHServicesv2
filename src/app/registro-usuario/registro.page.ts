import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: any;
  estado: any;
  rol: any;
  
  nombres: any = [];

  constructor(
    public _apiService: ApiService
  ){
    this.getUsuarios();
  }

  addUsuario()
  {
    let data = {
      nombre: this.nombre,
      estado: this.estado,
      rol: this.rol
    }

    this._apiService.addusuario(data).subscribe((res:any) => {
    console.log("SUCCESS ===",res);
    this.nombre = '';
    this.estado = '';  
    this.rol = ''; 
    alert('SUCCESS');
    this.getUsuarios();

    },(error: any) => {
      alert('ERROR');
      console.log("Error ===",error);
    })
    
  }
   getUsuarios(){
    this._apiService.getUsuarios().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.nombres = res;
      },(error: any) => {
        console.log("ERROR ===",error);
      })

 }
 deleUsuarios(id){
  this._apiService.deleUsuarios(id).subscribe((res:any) => {
    console.log("SUCCESS");
    this.getUsuarios();
    },(error: any) => {
      console.log("ERROR")
    })
  }

}
