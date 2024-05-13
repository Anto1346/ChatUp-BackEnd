import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    
  }

  public login() {
    console.log('Iniciar sesión con:', this.username, this.password);
    this.router.navigate(['/chat']);
  }

  public goToChatPage() {
    this.router.navigate(['/chat'])
  }

  public goToRegisterPage() {
    console.log('goToRegisterPage() called');
    this.router.navigate(['/register']);
  }

  public goToForgotPasswordPage() {
    console.log('goToForgotPasswordPage() called');
    this.router.navigate(['/forgot-password']);
  }
}
