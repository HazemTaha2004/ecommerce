import { Component } from '@angular/core';
import { TopHeaderComponent } from "../../templet/top-header/top-header.component";
import { HeaderComponent } from "../../templet/header/header.component";
import { NavbarComponent } from "../../templet/navbar/navbar.component";
import { NewsPaperComponent } from "../../templet/news-paper/news-paper.component";
import { FooterComponent } from "../../templet/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../../services/services.module';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TopHeaderComponent, HeaderComponent, NavbarComponent, NewsPaperComponent, FooterComponent,CommonModule,RouterLink,HttpClientModule,RouterModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  allNews:any = [];
  result={success:false, message:""};
  ngOnInit(): void {
    this.getAllProduct();
  }
  constructor(public ProductService:ProductService){}
  getAllProduct(){
    this.ProductService.getAllProductsData().subscribe(
      response=>{
        this.allNews = response;
        //console.log(response);
      },
      error=>{
        console.error('حدث خطأ:', error);
      }
    );
  }
}
