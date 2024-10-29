import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [TopHeaderComponent, HeaderComponent, NavbarComponent, NewsPaperComponent, FooterComponent,RouterLink,],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {

}
