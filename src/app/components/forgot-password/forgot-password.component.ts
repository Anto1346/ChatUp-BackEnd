import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email!: string;

  constructor(private router: Router) {  }

  recoverPassword() {
    // Lógica para recuperar la contraseña del usuario
    console.log('Solicitud de recuperación de contraseña para:', this.email);
  }

  ngOnInit(): void {
    
  }

  public goToRegisterPage() {
    console.log('goToRegisterPage() called');
    this.router.navigate(['/register']);
  }
}
