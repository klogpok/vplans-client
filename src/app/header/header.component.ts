import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn$: BehaviorSubject<boolean | null>;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.authenticated$;
  }

  onLogout() {
    this.loginService.logout();
  }
}
