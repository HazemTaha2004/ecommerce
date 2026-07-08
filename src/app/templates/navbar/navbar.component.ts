import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected to styleUrls
})
export class NavbarComponent {
  links = [
    { path: '/home', label: "Home" },
    { path: '/hotdeals', label: "Hot Deals" }, // Added the missing comma
    { path: '/categories', label: "Categories" },
    { path: '/home', label: "Laptops" },
    { path: '/home', label: "Smartphones" },
    { path: '/home', label: "Cameras" },
    { path: '/home', label: "Accessories" },
  ];

  trackByFn(index: number, item: any) {
    return index; // Return the index or a unique identifier for the item
  }
}
