import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
    private Usuarios : Usuarios = 
    { num_doc: 0, tip_doc: "", nombre: "", apellido: "", telefono: 0, rol: ""};
    private urlapi = "https://localhost:7216/";
  constructor(private http:HttpClient) { }
  public getFrase(): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.urlapi);
  }
}
