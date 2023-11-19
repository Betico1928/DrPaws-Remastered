import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  private decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  getUserRolesFromToken(token: string): string[] {
    const decodedToken = this.decodeToken(token);
    return decodedToken.roles || [];
  }
}
