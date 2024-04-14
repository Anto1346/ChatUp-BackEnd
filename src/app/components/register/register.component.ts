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

  ngOnInit(): void {
    
  }

  login() {
    console.log('Usuario registrado:', this.username);
  }

  goToLoginPage(){
    
  }
}