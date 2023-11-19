import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectionService {

  constructor(
    private router:Router,
    private authService:AuthService
  ) {
  }

  // Redireccionar
  redirectBasedOnUserRole(): void{

    // Obtener el token
   const token = localStorage.getItem('token');

    // Obtener el rol del usuario solo
    if(token != null){
      const userRoles = this.authService.getUserRolesFromToken(token);
      this.redirigirPagina(userRoles);

    }
  }

  private redirigirPagina(userRoles: string[]){
    if(userRoles.includes("USUARIO")){
      this.router.navigate(['usuario/dashboard-usuario']);
    }
    if(userRoles.includes("VETERINARIO")){
      this.router.navigate(['administrativo/dashboard-veterinaria']);
    }
  }
}
