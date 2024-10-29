import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopHeaderComponent, 
    HeaderComponent, 
    NavbarComponent, 
    NewsPaperComponent, 
    FooterComponent,
    CommonModule // Removed duplicate
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class HomeComponent {
  // Array of products structured in groups
  products = [
    [
      { img: 'assets/img/product07.png', category: 'Category', name: 'Product Name 1', price: 980, oldPrice: 990 },
      { img: 'assets/img/product08.png', category: 'Category', name: 'Product Name 2', price: 980, oldPrice: 990 },
      { img: 'assets/img/product09.png', category: 'Category', name: 'Product Name 3', price: 980, oldPrice: 990 }
    ],
    [
      { img: 'assets/img/product01.png', category: 'Category', name: 'Product Name 4', price: 980, oldPrice: 990 },
      { img: 'assets/img/product02.png', category: 'Category', name: 'Product Name 5', price: 980, oldPrice: 990 },
      { img: 'assets/img/product03.png', category: 'Category', name: 'Product Name 6', price: 980, oldPrice: 990 }
    ],
    [
      { img: 'assets/img/product04.png', category: 'Category', name: 'Product Name 7', price: 980, oldPrice: 990 },
      { img: 'assets/img/product05.png', category: 'Category', name: 'Product Name 8', price: 980, oldPrice: 990 },
      { img: 'assets/img/product06.png', category: 'Category', name: 'Product Name 9', price: 980, oldPrice: 990 }
    ],
  ];
  top=["Top Selling","Best Selling ","New Arrived"];
}
