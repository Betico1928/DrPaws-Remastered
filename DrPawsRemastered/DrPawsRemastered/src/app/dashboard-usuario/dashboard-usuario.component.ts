import { UsuarioService } from './../service/usuario/usuario.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent {

  usuario!: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    ){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get('id'));
      this.usuarioService.searchById(id).pipe(
        mergeMap(
          (data)=>{
            this.usuario = data;
            return this.usuarioService.searchMascotasByUsuarioID(this.usuario.id);
          }
        )
      ).subscribe(
        (data) =>{
          this.usuario.mascotas = data;
          console.log(this.usuario)
        }
      )

    })
  }
}
