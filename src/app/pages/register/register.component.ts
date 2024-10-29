import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TopHeaderComponent, HeaderComponent, NavbarComponent, FooterComponent,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(400),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(400),
        
      ]),
      Terms_of_service: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log('Name:', this.registerForm.value.name);
      console.log('email:', this.registerForm.value.email);
      console.log('password:', this.registerForm.value.password);
    } else {
      console.error("Form is invalid!");
    }
  }
}
