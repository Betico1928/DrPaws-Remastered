import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  private baseUrl = 'http://localhost:8080/autenticacion';

  constructor(private http: HttpClient) { }

  autenticarUser(cedula: string): Observable<any>
  {
    const body = { cedula: cedula };
    return this.http.post(`${this.baseUrl}/user`, body);
  }
}
