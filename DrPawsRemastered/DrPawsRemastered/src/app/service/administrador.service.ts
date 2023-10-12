import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Este servicio estará disponible en toda la aplicación
})
export class VeterinarioService {

  // La URL base de la API a la que el servicio hará las peticiones
  private apiUrl = 'http://localhost:8080/veterinario';

  constructor(private http: HttpClient) { }

  // Obtiene un veterinario por su ID. Retorna un observable del tipo any.
  getVeterinario(id: number): Observable<any> {
    // Usa http.get() para hacer una petición GET a la URL específica y obtener datos
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crea un nuevo veterinario. Acepta un objeto 'veterinario' como parámetro y lo envía al servidor.
  createVeterinario(veterinario: any): Observable<any> {
    // Usa http.post() para enviar una petición POST con los datos del nuevo veterinario a la API
    return this.http.post<any>(`${this.apiUrl}/add`, veterinario);
  }

  // Actualiza los datos de un veterinario identificado por 'id'.
  // Envia los nuevos datos del veterinario en el cuerpo de la petición.
  updateVeterinario(id: number, veterinario: any): Observable<any> {
    // Usa http.post() para enviar una petición POST con los datos actualizados del veterinario a la API
    return this.http.post<any>(`${this.apiUrl}/update/${id}`, veterinario);
  }

  // Elimina un veterinario identificado por 'id'.
  deleteVeterinario(id: number): Observable<any> {
    // Usa http.delete() para enviar una petición DELETE a la API y eliminar el veterinario
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  // Obtiene todos los veterinarios disponibles en la base de datos.
  getAllVeterinarios(): Observable<any> {
    // Usa http.get() para hacer una petición GET a la API y obtener la lista de veterinarios
    return this.http.get<any>(`${this.apiUrl}/all`);
  }
}
