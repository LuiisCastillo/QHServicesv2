import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-asignar-paciente',
  templateUrl: './asignar-paciente.page.html',
  styleUrls: ['./asignar-paciente.page.scss'],
  
})
export class AsignarPacientePage implements OnInit {
id: any;
estado:any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService
  ) {

  this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getPaciente(this.id);})

   }
  addSonografia(){
    {
      let data = {
    id: this.id,
    estado: this.estado,
 
        }
        this._apiservice.addSonografia(data).subscribe((res:any) => {
          console.log("SUCCESS ===",res);
          
          alert('SUCCESS');
          
  
        },(error: any) => {
          alert('ERROR');
          console.log("Error ===",error);
        })
    }
  }

  ngOnInit() {
  }
  getPaciente(id){
    this._apiservice.getPaciente(id).subscribe((res:any) => {
      console.log("SUCCESS",res);
      let pacientes = res[0];
      this.id = pacientes.id_paciente;
  
      
      },(error: any) => {
        console.log("ERROR ===",error);
      })

    }
   
}
