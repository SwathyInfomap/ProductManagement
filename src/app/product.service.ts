import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**we use services for data sharing and writing business logic */


  /**to fetch data from db.json */
  httpClient=inject(HttpClient);

  constructor() { }
/**to call Http API */
  getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  getProductById(id:number){
    return this.httpClient.get<Product>("http://localhost:3000/products/"+id);
  }
}
