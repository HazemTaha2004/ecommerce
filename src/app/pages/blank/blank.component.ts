import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templates/top-header/top-header.component";
import { HeaderComponent } from "../../templates/header/header.component";
import { NavbarComponent } from "../../templates/navbar/navbar.component";
import { NewsPaperComponent } from "../../templates/news-paper/news-paper.component";
import { FooterComponent } from "../../templates/footer/footer.component";
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
