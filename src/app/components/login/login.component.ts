import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public token = '';

  private authService: AuthService = inject(AuthService)

  email: string;
  password: string;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    
  }

  public login(): any {
    this.authService.login(this.email, this.password).subscribe({
      next:(response)=>{
        localStorage.setItem("token", JSON.stringify(response.jwt)),
        localStorage.setItem("userId", JSON.stringify(response.userId)),
        (this.router.navigate(['/chat']))        
      },
      error:()=>{console.log('Problema de inicio de sesión')}
      
    })
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
