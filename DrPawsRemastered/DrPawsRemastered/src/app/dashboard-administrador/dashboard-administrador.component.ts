import { Component, OnInit } from '@angular/core';
import { VeterinarioService} from "../service/administrador.service";

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent implements OnInit {

  // Variable para almacenar la lista de veterinarios obtenidos del backend
  veterinarios: any[] = [];

  constructor(
    private veterinarioService: VeterinarioService  // Inyección del servicio
  ) { }

  ngOnInit(): void {
    // Llama al método para obtener la lista de veterinarios cuando el componente se inicializa
    this.fetchVeterinarios();
  }

  fetchVeterinarios(): void {
    // Suscripción al observable retornado por el método getAllVeterinarios() del servicio
    this.veterinarioService.getAllVeterinarios().subscribe(
      // En caso de éxito, asigna la respuesta (data) a la variable veterinarios
      data => this.veterinarios = data,
      // En caso de error, logea el error en la consola
      error => console.error(error)
    );
  }

  // Puedes agregar más métodos aquí para implementar otras funciones,
  // como agregar, actualizar o eliminar veterinarios, etc.
}
