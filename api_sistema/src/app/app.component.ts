import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api_sistema';
  public Usuarios : Usuarios = 
  { num_doc: 0, tip_doc: "", nombre: "", apellido: "", telefono: 0, rol: ""};
  constructor(private ServiciosService:ServiciosService){

  }
  ngOnInit() {
    this.ServiciosService.getFrase().subscribe(Usuarios => (this.Usuarios = Usuarios));
    console.log("ngOnInit. FIN");
    //this.apiservice.getFrase().subscribe(this.fraseRecibida);
  }
  element = false;

  mostrar(){
     return (this.element = true);
  }
}
