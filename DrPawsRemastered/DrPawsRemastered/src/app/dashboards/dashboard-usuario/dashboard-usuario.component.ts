import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../service/usuario/usuario.service";
import {Usuario} from "../../model/usuario";
import {Mascota} from "../../model/mascota";

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit
{
  usuario: Usuario | null = null;
  mascotas: Mascota[] = [];


  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.usuarioService.getUsuarioById(id).subscribe(
        data => { this.usuario = data; },
        error => { console.error('Error al obtener los datos del usuario', error); }
      );

      this.usuarioService.getMascotasByUsuarioId(id).subscribe(
        data => { this.mascotas = data; },
        error => { console.error('Error al obtener los datos de las mascotas', error); }
      );
    });
  }
}
