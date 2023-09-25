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
    this.listaDeMascotas = this.MascotaService.searchAll();
  }

  // Delete
  deleteMascota(id: number): void
  {
    this.MascotaService.deleteById(id);
  }
}
