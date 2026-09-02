import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  showPassword = false;
  submitted = false;
  loginFailed = false;
  showLanguageMenu = false;

  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      keepLoggedIn: [false]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleLanguageMenu(): void {
  this.showLanguageMenu = !this.showLanguageMenu;
}

  onSubmit(): void {
    this.submitted = true;
    this.loginFailed = false;

    if (this.form.invalid) return;

    const { email, password, keepLoggedIn } = this.form.value;

    const success = this.auth.login(
      email ?? '',
      password ?? '',
      !!keepLoggedIn
    );

    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }

  get f() {
    return this.form.controls;
  }
}