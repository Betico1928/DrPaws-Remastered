import { Injectable } from '@angular/core';
import {Mascota} from "../../model/mascota";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tratamiento} from "../../model/tratamiento";

@Injectable({
  providedIn: 'root'
})

export class MascotaService
{
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/mascota';

  // CRUD:
  // Create
  createMascota(mascota: Mascota): Observable<Mascota>
  {
    return this.http.post<Mascota>(`${this.apiUrl}/agregar`, mascota);
  }

  // ----------------------------------------------------------------------------------------------------------------

  // Read
  // Todas las mascotas
  getMascotas(): Observable<Mascota[]>
  {
    return this.http.get<Mascota[]>(`${this.apiUrl}/all`);
  }

  // Una mascota a traves de su ID -TODO-
  getMascota(id: number): Observable<Mascota>
  {
    return this.http.get<Mascota>(`${this.apiUrl}/find/${id}`);
  }

  // ----------------------------------------------------------------------------------------------------------------

  // Update
  updateMascota(id: number | undefined, mascota: Mascota): Observable<void>
  {
    return this.http.post<void>(`${this.apiUrl}/update/${id}`, mascota);
  }

  // ----------------------------------------------------------------------------------------------------------------

  // Delete
  deleteMascota(id: number | undefined): Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // ----------------------------------------------------------------------------------------------------------------

  // Buscar tratamientos
  getTratamientosByMascotaId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.apiUrl}/tratamientos/${id}`);
  }

}
