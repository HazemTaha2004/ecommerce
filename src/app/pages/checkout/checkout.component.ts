import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TopHeaderComponent, HeaderComponent, NavbarComponent, NewsPaperComponent, FooterComponent,NgFor,RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  header=["Billing address"];
  header2=["Shiping address"];
  states: string[] = ['Giza', 'Cairo', 'Alex', 'Aswan']; 
  countrys: string[] = ['Egypt', 'Usa', 'UAE',]; 




  billingAddressForm: FormGroup;

  constructor() {
    this.billingAddressForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      address2: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      country: new FormControl('', [
        Validators.required,
      ]),
      state: new FormControl('', [
        Validators.required,
      ]),
      zip: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.minLength(10),

      ]),
    });
  }

  billingAddress() {
    if (this.billingAddressForm.valid) {
      console.log(this.billingAddressForm.value);
      console.log('email:', this.billingAddressForm.value.email);
      console.log('password:', this.billingAddressForm.value.password);
    } else {
      console.error("Form is invalid!");
    }
  }
}