import { Component, OnInit } from '@angular/core';
import { MascotaService } from "../../service/mascota/mascota-service.service";
import { Mascota } from "../../model/mascota";
import { Veterinario } from "../../model/veterinario";
import { VeterinarioService } from "../../service/veterinario/veterinario.service";
import { ActivatedRoute, Router } from "@angular/router";
import { VetDto } from 'src/app/model/dto/VetDTO';
import { Observable, mergeMap } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-dashboard-veterinario',
  templateUrl: './dashboard-veterinario.component.html',
  styleUrls: ['./dashboard-veterinario.component.css']
})
export class DashboardVeterinarioComponent implements OnInit {
  userRoles!: string[];

  vet!: VetDto;
  listaDeMascotas: Mascota[] = [];

  id!: number;
  veterinario?: Veterinario

  constructor(
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Determinar tipo de usuario
    const token = localStorage.getItem('token');

    if (token != null) {
      this.userRoles = this.authService.getUserRolesFromToken(token);
    }

    if (this.userRoles.includes("VETERINARIO")) {
      // Cargar al veterinario
      this.veterinarioService.veterinarioHome().pipe(
        mergeMap(
          (data) => {
            // Se retorna el objeto DTO del veterinario
            this.vet = data;
            return this.veterinarioService.getVeterinario(this.vet.id);
          }
        ),
      ).subscribe(
        (data) => {
          // Se obtiene el veterinario con el DTO
          this.veterinario = data;
        },
        (error) => {
          alert("Lo sentimos, no pudimos cargar al veterinario");
        }
      )
    }

    // Cargar a las mascotas:
    this.getMascotas();
  }

  // Obtener las mascotas:
  getMascotas(): void {
    this.mascotaService.getMascotas().subscribe(mascotas => this.listaDeMascotas = mascotas);
  }

  // Visualizar una mascota
  visualizarMascota(mascotaId: number): void {
    // Redirigir a página para visualizar mascota
    this.router.navigate(['/administrativo/visualizar-mascota/' + mascotaId]);
  }

  // Editar una mascota
  editarMascota(mascotaId: number): void {
    // Redirigir a página para editar mascota
    this.router.navigate(['/administrativo/modificar-mascota/' + mascotaId]);
  }

  // Agregar una mascota
  agregarMascota():void{
    // Redirige a la pagina para crear mascotas
    this.router.navigate(['/administrativo/crear-mascota']);
  }

  // Agregar un usuario
  agregarUsuario():void{
    // Redirige a la pagina para crear usuarios
    this.router.navigate(['/administrativo/crear-usuario']);
  }

  // Borrar mascota:
  deleteMascota(id: number | undefined): void {
    // Confirmar si el usuario realmente quiere eliminar la mascota
    if (confirm('¿Estás seguro de que quieres borrar esta mascota? Esta acción no se podrá deshacer.')) {
      this.mascotaService.deleteMascota(id).subscribe(response => {
        // Actualizar la lista de mascotas después de borrar
        this.getMascotas();
      });
    }
  }
}
