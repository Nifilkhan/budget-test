import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ACTIVE_USERS, STAT_CARDS } from './mock.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  statCards = STAT_CARDS;
  activeUsers = ACTIVE_USERS;
  sidebarOpen = false;
  userEmail: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
    this.userEmail = this.auth.getUserEmail();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}