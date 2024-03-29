import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:Product[]=[]
  filteredProduct:Product[]=[];
  /**to inject a service within a component we follow the below syntax */
  productService=inject(ProductService);
  router=inject(Router);


  ngOnInit(){
    /**here instead of data httpclient returns observables and observables needs to be subscribed to get the data*/
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      this.products=result;
      this.filteredProduct=this.products;
    })
    
  }

onSearch(search: string) {
  console.log("home",search);
  if(search){
    this.filteredProduct=this.products.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()));
  }else{
    this.filteredProduct=this.products;
  }
}
 
  

  onViewProduct(event:any){
    console.log("onViewProduct",event);
    this.router.navigateByUrl("/product/"+event)
  }


}
