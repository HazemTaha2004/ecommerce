import { Component } from '@angular/core';
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NewsPaperComponent, 
    FooterComponent, 
    TopHeaderComponent, 
    HeaderComponent, 
    NavbarComponent, 
    CommonModule,FormsModule,RouterLink,RouterLinkActive,CommonModule,
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']  // Fixed typo from styleUrl to styleUrls
})
export class CategoriesComponent {
  products = [
    {
      image: 'assets/img/product01.png',
      category: 'Laptops',
      name: 'Product 1',
      price: 980.00,  // Changed to number for currency pipe
      oldPrice: 990.00,
      sale: '-30%',
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product02.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product03.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product04.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product05.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product06.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product07.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product08.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    {
      image: 'assets/img/product09.png',
      category: 'Smartphones',
      name: 'Product 2',
      price: 980.00,
      oldPrice: 990.00,
      isNew: true,
      rating: [true, true, true, true, false]
    },
    // Continue updating other products...
  ];

  categories = [
    { id: 1, name: 'Laptops', count: 120 },
    { id: 2, name: 'Smartphones', count: 740 },
    { id: 3, name: 'Cameras', count: 1450 },
    { id: 4, name: 'Accessories', count: 578 }
  ];

  brands = [
    { id: 1, name: 'SAMSUNG', count: 578 },
    { id: 2, name: 'LG', count: 125 },
    { id: 3, name: 'SONY', count: 755 }
  ];

  topSellingProducts = [
    {
      image: 'assets/img/product01.png',
      category: 'Laptops',
      name: 'Product 1',
      price: 980.00,
      oldPrice: 990.00
    },
    {
      image: 'assets/img/product02.png',
      category: 'Laptops',
      name: 'Product 1',
      price: 980.00,
      oldPrice: 990.00
    },
    {
      image: 'assets/img/product03.png',
      category: 'Laptops',
      name: 'Product 1',
      price: 980.00,
      oldPrice: 990.00
    },
    {
      image: 'assets/img/product04.png',
      category: 'Laptops',
      name: 'Product 1',
      price: 980.00,
      oldPrice: 990.00
    },
    // Continue updating other top-selling products...
  ];

  priceMin: number = 0;
  priceMax: number = 1000;

  // Example filter method
  filterProducts() {
    return this.products.filter(product => {
      return product.price >= this.priceMin && product.price <= this.priceMax;
      // Add more filtering logic for categories and brands if needed
    });
  }
}
