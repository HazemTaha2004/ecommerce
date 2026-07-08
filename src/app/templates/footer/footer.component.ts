import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  paragraphAboutUs=["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."];
  aboutUsLinks=["01129608059","Hazemashraftaha2004@gmail.com","1734 Stonecoal Road"];
  phoneNumber=['01129608059'];

  emailAddrese=['Hazemashraftaha2004@gmail.com'];

  location=['1734 Stonecoal Road'];

  footerTitle=["About Us","Categories","Information","Service"];
  categorieLinks=['Hot deals','Laptops','Smartphones','Cameras','Accessories'];
  informationLinks=["About Us","Contact Us","Privacy Policy","Orders and Returns","Terms & Conditions"];
  ServiceLinks=["My Account","View Cart","Wishlist","Track My Order","Help"];
  trackByFn(index: number, item: string) {
    return index; // or return some unique identifier for the item
  }
}
