import {Component, OnInit} from '@angular/core';
import {MascotaService} from "../../service/mascota/mascota-service.service";
import {Mascota} from "../../model/mascota";

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit
{
  listaDeMascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas(): void {
    this.mascotaService.getMascotas().subscribe(mascotas => this.listaDeMascotas = mascotas);
  }

  deleteMascota(id: number): void {
    // Implementar la lógica para eliminar una mascota
  }
}
