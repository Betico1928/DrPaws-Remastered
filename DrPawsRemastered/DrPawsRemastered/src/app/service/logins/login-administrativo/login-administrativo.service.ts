import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginAdministrativoService {

  private apiUrl = 'http://localhost:8080/autenticacion';

  constructor(private http: HttpClient) { }

  autenticarAdministrativo(user: User): Observable<String>
  {
    return this.http.post(`${this.apiUrl}/administrativo`, user,
    {
      responseType: 'text'
    });
  }
}
