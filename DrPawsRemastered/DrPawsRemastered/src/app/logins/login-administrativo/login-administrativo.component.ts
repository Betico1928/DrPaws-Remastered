import { AuthService } from './../../service/auth/auth.service';
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { User } from 'src/app/model/user';
import { LoginAdministrativoService } from 'src/app/service/logins/login-administrativo/login-administrativo.service';

@Component({
  selector: 'app-login-administrativo',
  templateUrl: './login-administrativo.component.html',
  styleUrls: ['./login-administrativo.component.css']
})
export class LoginAdministrativoComponent
{
  formUser: User = {
    correo: '',
    password: ''
  };

  mostrarError: boolean = false;

  constructor(
    private autenticacionService: LoginAdministrativoService,
    private router: Router,
    private authService: AuthService
  ) { }

  login(): void {
    this.mostrarError = false; // Asegurándonos de que el error no se muestra antes de intentar autenticar

    console.log(this.formUser);

    // Autenticar un usuario veterinario o administrador
    this.autenticacionService.autenticarAdministrativo(this.formUser).subscribe(
      (data)=>{
        // Se guarda el token
        localStorage.setItem('token', String(data));
        // Identificar el tipo de usuario
        const userRoles = this.authService.getUserRolesFromToken(String(data));


        // Redirigir al usuario a la página correspondiente
        this.redirigirPagina(userRoles);
      },
      (error) => {
        console.log('Error en autenticación', error);
        this.mostrarError = true; // Mostramos el error cuando falla la autenticación

        // Si deseas que el mensaje de error se oculte automáticamente después de algunos segundos, puedes usar setTimeout.
        setTimeout(() => {
          this.mostrarError = false;
        }, 6000); // Por ejemplo, aquí se oculta después de 6 segundos
      }
    )
  }

  private redirigirPagina(userRole: string[]){
    console.log(userRole)
    if(userRole.includes("VETERINARIO")){
      this.router.navigate(['administrativo/dashboard-veterinaria']);
    }
    if(userRole.includes("ADMINISTRADOR")){
      this.router.navigate(['administrativo/dashboard-veterinaria']);
    }
  }
}
