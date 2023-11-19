import { Component } from '@angular/core';
import { Veterinario } from "../../model/veterinario";
import { VeterinarioService } from "../../service/veterinario/veterinario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent {

  veterinarios?: Veterinario[];


  constructor(private veterinarioService: VeterinarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.veterinarioService.getAllVeterinarios().subscribe(
      veterinarios => this.veterinarios = veterinarios,
      error => {
        alert('Error buscando a los veterinarios - ' + error)
      }
    );
  }

  endSession(): void {
    localStorage.removeItem("token");
    this.router.navigate(['/home']);

  }
  // Cambiarle el estado al Veterinario:
  onChangeActive(veterinario: Veterinario): void {
    this.veterinarioService.updateVeterinario(veterinario.id, veterinario)
      .subscribe(updatedVeterinario => {
      }, error => {
        alert('Error actualizando al veterinario: ' + error);
        veterinario.activo = !veterinario.activo; // Revertir el cambio en caso de error
      });
  }

  // Borrar a un veterinario:
  deleteVeterinario(id: number): void {
    if (confirm('¿Estás seguro de que quieres borrar este veterinario?')) {
      this.veterinarioService.deleteVeterinario(id).subscribe(() => {
        this.veterinarios = this.veterinarios!.filter(vet => vet.id !== id);
      }, error => {
        console.error('Error deleting veterinario:', error);
        // Puedes mostrar un mensaje de error al usuario aquí.
      });
    }
  }
}
