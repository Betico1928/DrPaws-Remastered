import {Component, Input, OnInit} from '@angular/core';
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {Mascota} from "../../../model/mascota";
import {ActivatedRoute, Router} from "@angular/router";
import {Tratamiento} from "../../../model/tratamiento";
import {TratamientoService} from "../../../service/tratamiento/tratamiento.service";
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { UsuDto } from 'src/app/model/dto/UsuDTO';

@Component({
  selector: 'app-visualizar-mascota',
  templateUrl: './visualizar-mascota.component.html',
  styleUrls: ['./visualizar-mascota.component.css']
})
export class VisualizarMascotaComponent implements OnInit
{


  // DTOs
  usu!: UsuDto;

  // Tipo de usuario
  tipoUsuario!: String;

  searchedMascota?: Mascota;
  id!: number;
  tratamientos: Tratamiento[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService,
    private tratamientoService: TratamientoService
  ) {}

  ngOnInit(): void {

    const currentUrl = this.router.url;
    // Imprimir la URL
    console.log('Current URL: ', currentUrl);

    // Se obtiene el ID
    this.route.params.subscribe(
      params =>{
        this.id =  params['id'];
      }
    )
    // Verificar el tipo de usuario
    this.identificarUsuario(currentUrl)

    // Cargar mascotas
    this.loadMascota();

    // Cargar los tratamientos
    this.loadTratamientos();

  }

  private identificarUsuario(currentUrl: string){
    if(currentUrl.startsWith('/usuario')){
      this.tipoUsuario = "Usuario";
    }else{
      this.tipoUsuario = "Administrativo";
    }
  }

  private loadMascota(): void {
    this.mascotaService.getMascota(this.id).subscribe(
      mascota => this.searchedMascota = mascota,
      error => alert("Lo sentimos, no pudimos cargar a la mascota")
    );
  }

  private loadTratamientos(): void {
    this.mascotaService.getTratamientosByMascotaId(this.id).subscribe(
      tratamientos => this.tratamientos = tratamientos,
      error => alert("Lo sentimos, no pudimos cargar los tratamientos")
    );
  }

  eliminarTratamiento(tratamiento: Tratamiento) {
    // Mostrar mensaje de confirmación
    if (confirm('¿Seguro que deseas borrar este tratamiento?')) {
      // Si el usuario confirma, proceder con la eliminación
      this.tratamientoService.deleteTratamiento(tratamiento.id).subscribe(
        response => this.loadTratamientos(),
        error => alert("Lo sentimos, no pudimos eliminar el tratamiento")
      );
    }
    // Si el usuario cancela, no hacer nada
  }

}
