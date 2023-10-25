import { Injectable } from '@angular/core';
import {Tratamiento} from "../../model/tratamiento";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TratamientoService
{
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/tratamientos';

  createTratamiento(tratamiento: any, idMascota: number, idMedicamento: number, idVeterinario: number): Observable<any> {
    const params = {
      idMascota: idMascota.toString(),
      idMedicamento: idMedicamento.toString(),
      idVeterinario: idVeterinario.toString()
    };

    return this.http.post(`${this.apiUrl}/add`, tratamiento, { params: params });
  }

}
