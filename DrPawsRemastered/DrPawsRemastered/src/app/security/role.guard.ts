import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { RedirectionService } from '../service/redirection/redirection.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private redirectionService: RedirectionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // Use the redirection service to handle the redirection
    this.redirectionService.redirectBasedOnUserRole();

    // Return true to allow access or false to deny access
    return true;
  }
}
