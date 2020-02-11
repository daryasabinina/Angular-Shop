import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  // описать типы полей
  sub;
  cartContent;
  fullPrice;
  fullQuantity;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartContent = this.cartService.getCartContent();
    this.fullPrice = this.cartService.getFullPrice();
    this.fullQuantity = this.cartService.getQuantity();

    this.sub = this.cartService.channel$.subscribe(() => {
      this.fullPrice = this.cartService.getFullPrice();
      this.fullQuantity = this.cartService.getQuantity();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onRemove() {
    this.cartService.cleanCart();
    this.cartContent = this.cartService.getCartContent();
  }

}
