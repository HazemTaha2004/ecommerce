import { Component } from '@angular/core';
import { NgFor, NgClass, CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-news-paper',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule], // Add NgClass and CommonModule
  templateUrl: './news-paper.component.html',
  styleUrl: './news-paper.component.css'
})
export class NewsPaperComponent {
  links: string[] = ['fa-brands fa-facebook', 'fa-brands fa-twitter', 'fa-brands fa-instagram', 'fa-brands fa-linkedin'];
  Paragraph=["Sign Up for the "];
  boldWord=["NEWSLETTER"];

  trackByFn(index: number, item: string): number {
    return index;
  }
}
