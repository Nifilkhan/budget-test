import { Injectable } from '@angular/core';

const STORAGE_KEY = 'budget_app_logged_in';
const USER_KEY = 'budget_app_user_email';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string, keepLoggedIn: boolean): boolean {
    if (!email || !password) return false;
    const storage = keepLoggedIn ? localStorage : sessionStorage;
    storage.setItem(STORAGE_KEY, 'true');
    storage.setItem(USER_KEY, email);
    return true;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    return (
      localStorage.getItem(STORAGE_KEY) === 'true' ||
      sessionStorage.getItem(STORAGE_KEY) === 'true'
    );
  }

  getUserEmail(): string | null {
    return localStorage.getItem(USER_KEY) ?? sessionStorage.getItem(USER_KEY);
  }
}