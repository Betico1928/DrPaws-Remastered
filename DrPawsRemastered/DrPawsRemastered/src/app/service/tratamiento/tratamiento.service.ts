import { Injectable } from '@angular/core';
import {Tratamiento} from "../../model/tratamiento";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TratamientoService
{
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/tratamientos';

  addTratamiento(tratamiento: Tratamiento) {
    return this.http.post(`${this.apiUrl}/add`, tratamiento);
  }
}
