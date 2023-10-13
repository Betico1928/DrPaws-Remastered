import { Component, OnInit } from '@angular/core';
import { VeterinarioService} from "../service/administrador.service";

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent implements OnInit {

  veterinarios: any[] = [];
  selectedVeterinario = {
    id: null,
    nombre: '',
    // Otros campos que necesites
  };

  constructor(private veterinarioService: VeterinarioService) { }

  ngOnInit(): void {
    this.fetchVeterinarios();
  }

  fetchVeterinarios(): void {
    this.veterinarioService.getAllVeterinarios().subscribe(
      data => this.veterinarios = data,
      error => console.error(error)
    );
  }

  saveVeterinario(): void {
    if (this.selectedVeterinario.id) {
      // Actualización
      this.veterinarioService.updateVeterinario(this.selectedVeterinario.id, this.selectedVeterinario).subscribe(
        () => {
          this.fetchVeterinarios();  // Refrescar lista
          this.selectedVeterinario = { id: null, nombre: '' };  // Limpiar formulario
        },
        error => console.error(error)
      );
    } else {
      // Creación
      this.veterinarioService.createVeterinario(this.selectedVeterinario).subscribe(
        () => {
          this.fetchVeterinarios();  // Refrescar lista
          this.selectedVeterinario = { id: null, nombre: '' };  // Limpiar formulario
        },
        error => console.error(error)
      );
    }
  }

  selectVeterinario(vet: any): void {
    this.selectedVeterinario = { ...vet };  // Copia de los datos del veterinario seleccionado
  }

  deleteVeterinario(id: number): void {
    this.veterinarioService.deleteVeterinario(id).subscribe(
      () => this.fetchVeterinarios(),  // Refrescar lista después de eliminar
      error => console.error(error)
    );
  }
}
