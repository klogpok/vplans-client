export interface ISigninCredentials {
  email: string;
  password: string;
  role: string;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authenticated$ = new BehaviorSubject<boolean | null>(null);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private apollo: Apollo
  ) {}

  isSignedin() {
    return this.httpClient.get<boolean>('api/auth').pipe(
      tap(() => {
        this.authenticated$.next(true);
      }),
      catchError(() => of(false))
    );
  }

  isAuthenticated() {
    return this.httpClient.get<boolean>('api/auth').pipe(
      tap(() => {
        this.authenticated$.next(true);
      }),
      catchError(() => of(false))
    );
  }

  login(loginRequest: any) {
    return this.httpClient.post<any>('api/auth/login', loginRequest).pipe(
      tap(({ email }) => {
        this.authenticated$.next(true);
      })
    );
  }

  logout() {
    this.httpClient.post('api/auth/logout', {}).subscribe(() => {
      this.authenticated$.next(false);
      this.apollo.client.resetStore();
      this.router.navigate(['/login']);
    });
  }
}
