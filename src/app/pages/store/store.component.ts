import { Component, OnInit } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";  // Make sure this is imported

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    TopHeaderComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    HttpClientModule,
    NewsPaperComponent
],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  // Sample data for categories, brands, and products
  categories = [
    { id: 1, name: 'Laptops', count: 120 },
    { id: 2, name: 'Smartphones', count: 740 },
    { id: 3, name: 'Cameras', count: 1450 },
    { id: 4, name: 'Accessories', count: 578 },
  ];

  brands = [
    { id: 1, name: 'SAMSUNG', count: 578 },
    { id: 2, name: 'LG', count: 125 },
    { id: 3, name: 'SONY', count: 755 },
  ];

  topSellingProducts = [
    { image: './img/product01.png', category: 'Category 1', name: 'Product 1', price: 980.00, oldPrice: 990.00 },
    { image: './img/product02.png', category: 'Category 2', name: 'Product 2', price: 880.00, oldPrice: 900.00 },
    { image: './img/product03.png', category: 'Category 3', name: 'Product 3', price: 780.00 },
  ];

  products = [
    // Sample product data
    { image: './img/product01.png', name: 'Product A', price: 300, oldPrice: 350, rating: 4, category: 'Category A', sale: 15, isNew: true },
    { image: './img/product02.png', name: 'Product B', price: 450, oldPrice: 500, rating: 5, category: 'Category B' },
    // Add more products as needed
  ];

  getStars(rating: number) {
    return Array(rating).fill(0); // Simple method to generate stars based on rating
  }
}