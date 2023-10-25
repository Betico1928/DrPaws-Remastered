import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../model/usuario";
import {Mascota} from "../../model/mascota";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService
{
  private baseUrl: string = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) {
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/find/${id}`);
  }

  getMascotasByUsuarioId(id: number): Observable<Mascota[]>
  {
    return this.http.get<Mascota[]>(`${this.baseUrl}/find/${id}/mascotas`);
  }

  getAllUsuarios(): Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(`${this.baseUrl}/all`);
  }
}
