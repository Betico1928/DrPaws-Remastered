import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {
  private API_URL = 'http://localhost:8080/autenticacion/user';

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticateUser(cedula: string): Observable<any>
  {
    alert("Se le va al Spring: " + cedula)
    return this.http.post<any>(this.API_URL, {cedula: cedula});
  }

  loginAndRedirect(id: number): void
  {
    alert("Llegó: " + id)
    this.router.navigate([`/login-usuario/dashboard-usuario/${id}`]);
  }
}
