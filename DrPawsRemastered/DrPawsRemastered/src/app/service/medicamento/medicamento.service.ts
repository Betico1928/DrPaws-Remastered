import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medicamento} from "../../model/medicamento";

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService
{
  constructor(private http : HttpClient) { }

  private apiUrl = 'http://localhost:8080/medicamentos/all';

  getAllMedicamentos(): Observable<Medicamento[]>
  {
    return this.http.get<Medicamento[]>(`${this.apiUrl}`);
  }
}
