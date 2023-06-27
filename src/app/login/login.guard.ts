import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  canActivate() {
    return this.loginService.isAuthenticated().pipe(
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
