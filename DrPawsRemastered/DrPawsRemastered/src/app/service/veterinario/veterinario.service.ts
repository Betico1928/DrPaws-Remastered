import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veterinario} from "../../model/veterinario";

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService
{
  private apiUrl = 'http://localhost:8080/veterinario';

  constructor(private http: HttpClient) {}

  // Extraer a todos los veterinarios:
  getAllVeterinarios(): Observable<Veterinario[]>
  {
    return this.http.get<Veterinario[]>(`${this.apiUrl}/all`);
  }

  // Crear un veterinario:
  createVeterinario(veterinario: Veterinario): Observable<Veterinario>
  {
    return this.http.post<Veterinario>(`${this.apiUrl}/add`, veterinario);
  }


  // Actualizar al veterinario:
  updateVeterinario(id: number, veterinario: Veterinario): Observable<Veterinario> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.post<Veterinario>(url, veterinario);
  }

  // Borrar al veterinario:
  deleteVeterinario(id: number): Observable<void>
  {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
