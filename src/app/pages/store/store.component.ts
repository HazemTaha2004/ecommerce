import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from '../../templates/top-header/top-header.component';
import { HeaderComponent } from '../../templates/header/header.component';
import { NavbarComponent } from '../../templates/navbar/navbar.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { NewsPaperComponent } from '../../templates/news-paper/news-paper.component';

interface Category { id: number; name: string; count: number; }
interface Brand    { id: number; name: string; count: number; }
interface StoreProduct {
  image: string;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  sale?: number;
  isNew?: boolean;
}

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    TopHeaderComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NewsPaperComponent,
  ],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  readonly categories: Category[] = [
    { id: 1, name: 'Laptops',       count: 120  },
    { id: 2, name: 'Smartphones',   count: 740  },
    { id: 3, name: 'Cameras',       count: 1450 },
    { id: 4, name: 'Accessories',   count: 578  },
  ];

  readonly brands: Brand[] = [
    { id: 1, name: 'SAMSUNG', count: 578 },
    { id: 2, name: 'LG',      count: 125 },
    { id: 3, name: 'SONY',    count: 755 },
  ];

  readonly topSellingProducts: StoreProduct[] = [
    { image: './img/product01.png', category: 'Laptops',     name: 'UltraBook Pro 15',  price: 980, oldPrice: 990 },
    { image: './img/product02.png', category: 'Smartphones', name: 'Galaxy X10',        price: 880, oldPrice: 900 },
    { image: './img/product03.png', category: 'Cameras',     name: 'CamMaster 4K',      price: 780 },
  ];

  readonly products: StoreProduct[] = [
    { image: './img/product01.png', name: 'Laptop Elite', price: 300, oldPrice: 350, rating: 4, category: 'Laptops',     sale: 15, isNew: true },
    { image: './img/product02.png', name: 'Phone Pro X',  price: 450, oldPrice: 500, rating: 5, category: 'Smartphones' },
  ];

  /** Returns an array of `count` items for use with *ngFor star rendering */
  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}