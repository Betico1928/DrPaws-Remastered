import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginVeterinarioService} from "../../service/logins/login-veterinario/login-veterinario.service";
import {CredencialesDTO} from "../../model/dto/credenciales-dto";

@Component({
  selector: 'app-login-administrativo',
  templateUrl: './login-administrativo.component.html',
  styleUrls: ['./login-administrativo.component.css']
})
export class LoginAdministrativoComponent
{
  credenciales: CredencialesDTO = {
    correo: '',
    contrasenna: ''
  };

  constructor(
    private autenticacionService: LoginVeterinarioService,
    private router: Router
  ) { }

  login(): void {
    this.autenticacionService.autenticarVeterinario(this.credenciales).subscribe(
      data => {
        console.log('Autenticación exitosa!', data);
        this.router.navigate(['/login-administrativo/dashboard-veterinarios']);
      },
      error => {
        console.log('Error en autenticación', error);
        alert('Credenciales incorrectas');
        // Manejar error (mostrar mensaje al usuario, etc.)
      }
    );
  }
}
