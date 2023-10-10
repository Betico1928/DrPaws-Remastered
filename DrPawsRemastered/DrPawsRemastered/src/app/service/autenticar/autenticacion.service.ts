import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private http: HttpClient
  ) { }

  // Autenticar Veterinario
  autenticarVet(credenciales: any): Observable<any> {
    return this.http.post('http://localhost:8080/autenticacion/vet', credenciales);
  }

  // Autenticar un usuario
  autenticarUser(credenciales: any): Observable<any> {
    return this.http.post('http://localhost:8080/autenticacion/user', credenciales);
  }
}
