import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( private authService: AuthService,
              private router: Router) {}

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: e => console.error(e)
    });
  }

}
