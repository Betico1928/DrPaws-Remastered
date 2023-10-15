import { Component } from '@angular/core';
import {LoginUsuarioService} from "../../service/logins/login-usuario/login-usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  userId!: string;
  errorMessage!: string;

  constructor(
    private autenticacionService: LoginUsuarioService,
    private router: Router
  ) {}

  onLogin(): void {
    this.autenticacionService.autenticarUser(this.userId).subscribe(
        response => {
          if (response.id) {
            this.router.navigate([`/login-usuario/dashboard-usuario/${response.id}`]);
          }
        },
        error => {
          this.errorMessage = "Credenciales Incorrectas";
        }
      );
  }
}
