import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopHeaderComponent, FooterComponent, HeaderComponent, NavbarComponent,CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(400),
      ]),
      rememberMe: new FormControl('', [
        Validators.required,

      ]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log('email:', this.loginForm.value.email);
      console.log('password:', this.loginForm.value.password);
    } else {
      console.error("Form is invalid!");
    }
  }
}
