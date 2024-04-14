import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
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
