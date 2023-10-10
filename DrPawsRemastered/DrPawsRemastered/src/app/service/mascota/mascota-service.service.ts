import { Injectable } from '@angular/core';
import {Mascota} from "../../model/mascota";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MascotaServiceService
{
  constructor(
    private http: HttpClient
  ) {

   }

   // Operaciones CRUD

   // ADD
   add(mascota: Mascota): void{
    this.http.post('http://localhost:8080/mascota/agregar', mascota).subscribe();
   }

   // READ

   searchAll():Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8080/mascota/all');
   }

   searchById(id:number): Observable<Mascota>{
      const mascota = this.http.get<Mascota>('http://localhost:8080/mascota/find/'+id);
      return mascota;
    }

    // DELETE
    deleteById(id: number){
      console.log("ID: "+id);
      this.http.delete("http://localhost:8080/mascota/delete/"+id).subscribe();
    }

    // UPDATE
    update(mascota: Mascota){
      this.http.put("http://localhost:8080/mascota/update", mascota).subscribe();
    }

}
