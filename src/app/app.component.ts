import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from "./pages/checkout/checkout.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
}