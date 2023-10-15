import { Component } from '@angular/core';
import {Veterinario} from "../../model/veterinario";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent
{
  veterinarios?: Veterinario[];

  constructor(private veterinarioService: VeterinarioService) {}

  ngOnInit(): void
  {
    this.veterinarioService.getAllVeterinarios().subscribe(
      veterinarios => this.veterinarios = veterinarios,
      error => {
        alert('Error fetching veterinarios - ' + error)
        alert("Mas detalles - " + error.error)
      }
    );
  }
}
