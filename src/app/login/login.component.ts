import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup | any;
  hidePwd: boolean = true;
  isLoginMode: boolean = true;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: [undefined,[Validators.required]],
      password: [undefined,[Validators.required]]
    });
  }

  get emailControl() {return this.loginForm.get('email')};
  get passwordControl() {return this.loginForm.get('password')};

  onSubmit() {
    const formValues = this.loginForm.value;
    this.errorMessage = null;
    const authObservable = this.isLoginMode ? 
    this.authService.login(formValues.email, formValues.password) : 
    this.authService.register(formValues.email, formValues.password);
    authObservable.subscribe({
      next: () => {
        this.router.navigate([this.isLoginMode ? '/movies' : '/login' ])
      },
      error: err => { // error gestione errore in una subscribe
        this.errorMessage = this.isLoginMode ? 
        'Failed to login. Please check your credentials.' : 
        'Failed to register. Please check your credentials and try again.';
        this.openSnackBar(this.errorMessage);
      }
    });
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.loginForm.reset();
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

}
