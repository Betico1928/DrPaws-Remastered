import { Injectable } from '@angular/core';
import {Mascota} from "../../model/mascota";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MascotaService
{
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/mascota';

  // CRUD:
  // Create

  // ----------------------------------------------------------------------------------------------------------------

  // Read
  // Todas las mascotas
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}/all`);
  }

  // Una mascota a traves de su ID -TODO-
  getMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.apiUrl}/find/${id}`);
  }

  // ----------------------------------------------------------------------------------------------------------------

  // Update


  // ----------------------------------------------------------------------------------------------------------------

  // Delete
}
