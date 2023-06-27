import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  authenticated$: BehaviorSubject<boolean | null>;

  constructor(private loginService: LoginService) {
    this.authenticated$ = this.loginService.authenticated$;
  }

  ngOnInit() {}
}
