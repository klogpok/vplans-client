import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISigninCredentials, LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.loginService.login(this.form.value as ISigninCredentials).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: ({ error }) => {
        if (error.statusCode === 404) {
          this.form.setErrors({ invalidCredentials: true });
        }
      },
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
