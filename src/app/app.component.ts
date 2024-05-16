import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService){}

  ngOnInit() {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      this.router.navigate(['/movies']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
