import { Component } from '@angular/core';
import {LoginUsuarioService} from "../../service/logins/login-usuario/login-usuario.service";
import {Router} from "@angular/router";
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  userId!: string;
  errorMessage!: string;

  formUser: User =  {
    correo: '',
    password: ''
  }

  constructor(
    private autenticacionService: LoginUsuarioService,
    private router: Router
  ) {}

  onLogin(): void {
    console.log(this.formUser)
    this.autenticacionService.autenticarUser(this.formUser).subscribe(
        (data)=>{
          // Se guarda el token
          localStorage.setItem('token', String(data))
          this.router.navigate(['usuario/dashboard-usuario']);
        }
      );
  }
}
