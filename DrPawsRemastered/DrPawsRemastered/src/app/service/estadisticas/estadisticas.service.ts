import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http : HttpClient) { }

  // URL base para todas las solicitudes al backend
  private baseUrl: string = 'http://localhost:8080/admin/query';


  // Obtiene el total de mascotas en la veterinaria.
  getTotalMascotas(): Observable<number>
  {
    return this.http.get<number>(`${this.baseUrl}/total-mascotas`);
  }



  // Obtiene el total de mascotas activas en tratamiento en la veterinaria.
  getTotalMascotasActivas(): Observable<number>
  {
    return this.http.get<number>(`${this.baseUrl}/total-active-mascotas`);
  }



  // Obtiene la cantidad de veterinarios activos.
  obtenerCantidadVeterinariosActivos(): Observable<number>
  {
    return this.http.get<number>(`${this.baseUrl}/count-active`);
  }



  // Obtiene la cantidad de veterinarios inactivos.
  obtenerCantidadVeterinariosInactivos(): Observable<number>
  {
    return this.http.get<number>(`${this.baseUrl}/count-inactive`);
  }



  // Obtiene el número de tratamientos administrados en el último mes.
  countTratamientosAdminsitradosEnUltimoMes(): Observable<number>
  {
    return this.http.get<number>(`${this.baseUrl}/count-last-month`);
  }



  // Obtiene una tabla de los medicamentos y su cantidad suministrada el último mes.
  countTratamientosPorTipoMedicamentoAdminsitradoEnUltimoMes(): Observable<Object[]>
  {
    return this.http.get<Object[]>(`${this.baseUrl}/count-last-month-by-medicamento`);
  }



  // Obtiene las tres drogas más vendidas en los tratamientos.
  findTop3Tratamientos(): Observable<Object[]>
  {
    return this.http.get<Object[]>(`${this.baseUrl}/find-top3`);
  }



  // Calcula las ventas totales de la veterinaria.
  computeSales(): Observable<Object>
  {
    return this.http.get<Object>(`${this.baseUrl}/sales`);
  }



  // Calcula las ganancias de la veterinaria.
  computeProfit(): Observable<Object>
  {
    return this.http.get<Object>(`${this.baseUrl}/profit`);
  }
}
