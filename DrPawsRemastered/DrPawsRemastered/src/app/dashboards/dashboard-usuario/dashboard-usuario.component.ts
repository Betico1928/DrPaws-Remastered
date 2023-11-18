import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioService } from "../../service/usuario/usuario.service";
import { Usuario } from "../../model/usuario";
import { Mascota } from "../../model/mascota";
import { UsuDto } from 'src/app/model/dto/UsuDTO';
import { merge } from 'chart.js/dist/helpers/helpers.core';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {

  usu!: UsuDto;

  usuario: Usuario | null = null;
  mascotas: Mascota[] = [];




  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.usuarioService.usuarioHome().subscribe(
      (data) => {
        // Se obtiene el usuario DTO.
        this.usu = data;
        console.log(this.usu);

        // Se encuentra el usuario
        this.usuarioService.getUsuarioById(this.usu.id).pipe(
          mergeMap(
            (data) => {
              this.usuario = data;
              return this.usuarioService.getMascotasByUsuarioId(this.usuario?.id);
            }
          )
        ).subscribe(
          (data) => {
            this.mascotas = data;
          }
        )
      }
    )
  }

  // Redirigir a ver mascotas
  verMascota(mascotaId : number){
    this.router.navigate(['/usuario/ver_mascota/'+mascotaId]);
  }
}
