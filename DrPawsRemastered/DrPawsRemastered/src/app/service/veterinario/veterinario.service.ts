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

  // Actualizar al veterinario:
  updateVeterinario(id: number, veterinario: Veterinario): Observable<Veterinario> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.post<Veterinario>(url, veterinario);
  }
}
