import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  username!: string;
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  login() {
    console.log('Usuario registrado:', this.username);
  }

  goToLoginPage(){
    this.router.navigate(['/login']);
  }
}
