import { Component } from '@angular/core';
import {LoginUsuarioService} from "../../service/logins/login-usuario/login-usuario.service";

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  userId = '';
  errorMessage = '';

  constructor(private authService: LoginUsuarioService) { }

  onLogin(): void
  {
    alert("Se recibió: " + this.userId)
    this.authService.authenticateUser(this.userId).subscribe(
      (data) => {
        this.authService.loginAndRedirect(data.id); // Assumiendo que tu respuesta tiene un campo 'id'
      },
      (error) => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    );
  }
}
