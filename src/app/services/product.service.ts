import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getAllProductsData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  // publisher 
  getProductByIdData(id:string|null): Observable<any>
  {
    // url : http://localhost:8000/api/editor/1/show"
    return  this.http.get(this.url+id+"/show");
  }
}
