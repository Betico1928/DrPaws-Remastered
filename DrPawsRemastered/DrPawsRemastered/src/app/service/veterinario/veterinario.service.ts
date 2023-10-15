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
    alert("Buscando veterinarios:")
    return this.http.get<Veterinario[]>(`${this.apiUrl}/all`);
  }
}
