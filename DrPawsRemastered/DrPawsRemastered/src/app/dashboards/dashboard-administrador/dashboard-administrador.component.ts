import { Component } from '@angular/core';
import {Veterinario} from "../../model/veterinario";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent
{
  veterinarios?: Veterinario[];

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router
    ) {}

  ngOnInit(): void
  {
    this.veterinarioService.getAllVeterinarios().subscribe(
      veterinarios => this.veterinarios = veterinarios,
      error => {
        alert('Error buscando a los veterinarios - ' + error)
        this.salirCuenta();
      }
    );
  }


  // Cambiarle el estado al Veterinario:
  onChangeActive(veterinario: Veterinario): void {this.veterinarioService.updateVeterinario(veterinario.id, veterinario)
    .subscribe(updatedVeterinario => {
      }, error => {
        alert('Error actualizando al veterinario: ' + error);
        veterinario.activo = !veterinario.activo; // Revertir el cambio en caso de error
      });
  }

  // Crear un veterinario
  crearVeterinario():void{
    // Redirige a la pagina de creación de veterinario
    this.router.navigate(['administrativo/crear-veterinario']);
  }

  // Modificar un veterinario
  modificarVeterinario(veterinarioId:number):void{
    // Redirige a la página de modificar veterinario
    this.router.navigate(['administrativo/modificar-veterinario/'+veterinarioId])
  }

  // Ver estadística de la veterinaria
  verEstadisticas(): void{
    // Redirige a la página de estadísticas
    this.router.navigate(['administrativo/estadisticas-veterinaria']);
  }

  // Ver la veterinario
  verVeterinaria():void{
    // Redirige al dashboard de veterinario
    this.router.navigate(['administrativo/dashboard-veterinaria']);
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

  // Salir de cuenta
  salirCuenta():void{
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
  }
}
