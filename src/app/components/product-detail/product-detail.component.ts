import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product!:Product;
  productService=inject(ProductService);
  ngOnInit(){
    let productId=1;
    this.productService.getProductById(productId).subscribe(result=>{
      this.product=result;
    })
  }
}
