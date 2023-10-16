import {Component, OnInit} from '@angular/core';
import {MascotaService} from "../../service/mascota/mascota-service.service";
import {Mascota} from "../../model/mascota";
import {Veterinario} from "../../model/veterinario";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit
{
  listaDeMascotas: Mascota[] = [];

  id! : number;
  veterinario? : Veterinario

  constructor(
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,

    private route: ActivatedRoute
  ) { }

  ngOnInit(): void
  {
    // Cargar a las mascotas:
    this.getMascotas();

    // Cargar al veterinario:
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadVeterinario();
  }

  private loadVeterinario() : void
  {
    this.veterinarioService.getVeterinario(this.id).subscribe(
      veterinario => this.veterinario = veterinario,
      error => alert("Lo sentimos, no pudimos cargar al veterinario")
    );
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
