import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import { User } from 'src/app/model/user';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  private baseUrl = 'http://localhost:8080/autenticacion';

  constructor(private http: HttpClient) { }

  autenticarUser(user: User): Observable<String>
  {
    return this.http.post(`${this.baseUrl}/user`, user,
    {
      responseType: 'text'
    });
  }
}
