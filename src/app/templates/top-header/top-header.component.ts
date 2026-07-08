import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [RouterLink,CommonModule,],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  phoneNumber=['01129608059'];

  emailAddrese=['Hazemashraftaha2004@gmail.com'];

  location=['1734 Stonecoal Road'];

  coin=['USD'];

  account=['My Account'];

}
