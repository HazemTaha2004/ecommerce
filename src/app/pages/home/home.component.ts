import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from '../../templates/top-header/top-header.component';
import { HeaderComponent } from '../../templates/header/header.component';
import { NavbarComponent } from '../../templates/navbar/navbar.component';
import { NewsPaperComponent } from '../../templates/news-paper/news-paper.component';
import { FooterComponent } from '../../templates/footer/footer.component';

interface HomeProduct {
  img: string;
  category: string;
  name: string;
  price: number;
  oldPrice: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TopHeaderComponent,
    HeaderComponent,
    NavbarComponent,
    NewsPaperComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /** Products grouped in rows of 3 for the featured grid */
  readonly productRows: HomeProduct[][] = [
    [
      { img: 'assets/img/product07.png', category: 'Laptops',     name: 'UltraBook Air',   price: 980, oldPrice: 990 },
      { img: 'assets/img/product08.png', category: 'Smartphones', name: 'Galaxy Note 12',  price: 980, oldPrice: 990 },
      { img: 'assets/img/product09.png', category: 'Cameras',     name: 'ProShot DSLR',    price: 980, oldPrice: 990 },
    ],
    [
      { img: 'assets/img/product01.png', category: 'Accessories', name: 'Wireless Buds',   price: 980, oldPrice: 990 },
      { img: 'assets/img/product02.png', category: 'Laptops',     name: 'Elite 15 Pro',    price: 980, oldPrice: 990 },
      { img: 'assets/img/product03.png', category: 'Smartphones', name: 'iPhone SE Max',   price: 980, oldPrice: 990 },
    ],
    [
      { img: 'assets/img/product04.png', category: 'Cameras',     name: 'ActionCam 360',   price: 980, oldPrice: 990 },
      { img: 'assets/img/product05.png', category: 'Accessories', name: 'Mechanical Kbd',  price: 980, oldPrice: 990 },
      { img: 'assets/img/product06.png', category: 'Laptops',     name: 'Creator Studio',  price: 980, oldPrice: 990 },
    ],
  ];

  /** Tab labels for the top-selling section */
  readonly sellingTabs = ['Top Selling', 'Best Selling', 'New Arrivals'];
}
