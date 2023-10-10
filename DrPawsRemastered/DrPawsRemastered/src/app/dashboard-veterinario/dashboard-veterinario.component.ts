import { Component } from '@angular/core';
import {MascotaServiceService} from "../service/mascota/mascota-service.service";
import {Mascota} from "../model/mascota";

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent
{
  constructor(private MascotaService: MascotaServiceService) { }

  listaDeMascotas! : Mascota[]

  ngOnInit(): void
  {
    this.MascotaService.searchAll().subscribe(
      data => this.listaDeMascotas = data
    );
  }



  // Delete
    deleteMascota(id: number): void
  {
    const mascota: Mascota = this.listaDeMascotas.find(
      (mascota)=>mascota.id===id)!;
    var index = this.listaDeMascotas.indexOf(mascota);
    this.listaDeMascotas.splice(index,1);
    this.MascotaService.deleteById(id);

  }
}
