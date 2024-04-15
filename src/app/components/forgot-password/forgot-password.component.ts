import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit{
  email!: string;

  recoverPassword() {
    // Lógica para recuperar la contraseña del usuario
    console.log('Solicitud de recuperación de contraseña para:', this.email);
  }

  ngOnInit(): void {
    
  }
}
