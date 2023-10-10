import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/model/mascota';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
    ) { }

    // CRUD

    // Read
    searchById(id:number):Observable<Usuario>{
      return this.http.get<Usuario>("http://localhost:8080/usuario/find/"+id)
    }

    // Read mascotas
    searchMascotasByUsuarioID(id:number):Observable<Mascota[]>{
      return this.http.get<Mascota[]>("http://localhost:8080/usuario/find/"+id+"/mascotas");
    }



}
