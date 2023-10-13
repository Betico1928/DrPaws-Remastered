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

  mostrarError: boolean = false;

  constructor(
    private autenticacionService: LoginVeterinarioService,
    private router: Router
  ) { }

  login(): void {
    this.mostrarError = false; // Asegurándonos de que el error no se muestra antes de intentar autenticar

    this.autenticacionService.autenticarVeterinario(this.credenciales).subscribe(
      data => {
        console.log('Autenticación exitosa!', data);
        this.router.navigate(['/login-administrativo/dashboard-veterinarios']);
      },
      error => {
        console.log('Error en autenticación', error);
        this.mostrarError = true; // Mostramos el error cuando falla la autenticación

        // Si deseas que el mensaje de error se oculte automáticamente después de algunos segundos, puedes usar setTimeout.
        setTimeout(() => {
          this.mostrarError = false;
        }, 6000); // Por ejemplo, aquí se oculta después de 6 segundos
      }
    );
  }
}
