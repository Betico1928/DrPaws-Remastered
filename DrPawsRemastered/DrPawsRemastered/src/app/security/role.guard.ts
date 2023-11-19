import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { RedirectionService } from '../service/redirection/redirection.service';
import { AuthService } from '../service/auth/auth.service'; // Replace 'path-to-your-auth-service' with the actual path

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private redirectionService: RedirectionService,
    private router: Router,
    private authService: AuthService // Inject AuthService here
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Use the redirection service to handle the redirection
    this.redirectionService.redirectBasedOnUserRole();

    // Log user roles for debugging
    const token = localStorage.getItem('token');
    if (token != null) {
      const userRoles = this.authService.getUserRolesFromToken(token);
      console.log('User Roles:', userRoles);
    }

    // Return true to allow access or false to deny access
    return true;
  }
}
