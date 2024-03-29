import { Component } from '@angular/core';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [{
    /**replaced with real data */
    "id": "1",
    "brand": "HnM",
    "image": "https://lp2.hm.com/hmgoepprod?set=source[/c5/91/c591837d970438111f709e8252828e56003c940d.jpg],origin[dam],category[kids_new_born_clothing_bodysuits_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    "currentPrice": "150",
    "standardPrice": "300",
    "discount": "50",
    "name": "Set Of Baby Rompers"
  },
  {
    "id": "2",
    "brand": "Goodrik",
    "image": "https://rukminim2.flixcart.com/image/612/612/kjg1jm80-0/bedsheet/i/5/b/3d-new-brown-pati-101-3d-new-brown-pati-101-flat-goodrik-original-imafzy9frv9qt8rn.jpeg?q=70",
    "currentPrice": "229",
    "standardPrice": "499",
    "discount": "54",
    "name": " 140 TC Cotton Double 3D Printed Flat Bedsheet  (Pack of 1, Brown)"

  },
  {
    "id": "3",
    "brand": "CADDLE & TOES",
    "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/l/s/m/famous-car-remote-control-3d-car-with-led-lights-chargeable-1-original-imagzzx5yy2ggubg.jpeg?q=70",
    "currentPrice": "449",
    "standardPrice": "1999",
    "discount": "77",
    "name": " Famous Car Remote Control 3D with LED Lights, Chargeable  (Black)"
  },
  {
    "id": "4",
    "brand": "boAt",
    "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/x/e/v/-original-imagrzjfvsnyhurr.jpeg?q=70",
    "currentPrice": "1499",
    "standardPrice": "4499",
    "discount": "66",
    "name": "boAt 20000 mAh 22.5 W Power Bank  (Carbon Black, Lithium Polymer, Quick Charge 3.0 for Mobile)"
  },
  {
    "id": "5",
    "brand": "IRUSU",
    "image": "https://rukminim2.flixcart.com/image/612/612/kjem3rk0-0/smart-glass/9/n/j/ir-nmon-irusu-original-imafyzgfvewctzzm.jpeg?q=70",
    "currentPrice": "1999",
    "standardPrice": "3599",
    "discount": "44",
    "name": "IRUSU VR 3D Glasses Headset For mobiles - Monster VR  (Smart Glasses, Black)"
  }
  ];
}
