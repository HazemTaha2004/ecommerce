import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Shape of a FakeStore API product */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  /** Fetch all products */
  getAllProductsData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  /** Fetch a single product by numeric ID */
  getProductByIdData(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
