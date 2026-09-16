import { Component, computed, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ACTIVE_USERS, STAT_CARDS } from './mock.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  statCards = STAT_CARDS;
  activeUsers = signal(ACTIVE_USERS);
  sidebarOpen = signal(false);
  userEmail = signal<string | null>(null);

  totalUsers = computed(() => this.activeUsers().length);

  savingsAccounts = computed(
    () => this.activeUsers().filter((user) => user.accountType === 'Savings').length,
  );

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.userEmail.set(this.auth.getUserEmail());
  }

  toggleSidebar(): void {
    this.sidebarOpen.update((value) => !value);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
