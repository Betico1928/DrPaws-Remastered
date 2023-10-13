import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredencialesDTO} from "../../../model/dto/credenciales-dto";
import {Observable} from "rxjs";
import {Veterinario} from "../../../model/veterinario";

@Injectable({
  providedIn: 'root'
})
export class LoginVeterinarioService
{
  private apiUrl = 'http://localhost:8080/autenticacion';

  constructor(private http: HttpClient) { }

  autenticarVeterinario(credenciales: CredencialesDTO): Observable<Veterinario>
  {
    return this.http.post<Veterinario>(`${this.apiUrl}/vet`, credenciales);
  }
}
