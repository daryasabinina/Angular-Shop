import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartContent;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartContent = this.cartService.getCartContent();
  }

  onRemove() {
    this.cartService.cleanCart();
    this.cartContent = this.cartService.getCartContent();
  }

}
