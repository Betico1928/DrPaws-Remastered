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

  // Obtener las mascotas:
  getMascotas(): void
  {
    this.mascotaService.getMascotas().subscribe(mascotas => this.listaDeMascotas = mascotas);
  }

  // Borrar mascota:
  deleteMascota(id: number | undefined): void
  {
    // Confirmar si el usuario realmente quiere eliminar la mascota
    if (confirm('¿Estás seguro de que quieres borrar esta mascota? Esta acción no se podrá deshacer.'))
    {
      this.mascotaService.deleteMascota(id).subscribe(response => {
        // Actualizar la lista de mascotas después de borrar
        this.getMascotas();
      });
    }
  }
}
