import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../cart.service';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  options: Array<string>;
  sorting: string;
  subscription: Subscription;
  cartContent: Product[];
  fullPrice: number;
  fullQuantity: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartContent = this.cartService.getCartContent();
    this.fullPrice = this.cartService.getFullPrice();
    this.fullQuantity = this.cartService.getQuantity();

    this.subscription = this.cartService.channel$.subscribe(() => {
      this.fullPrice = this.cartService.getFullPrice();
      this.fullQuantity = this.cartService.getQuantity();
    });

    this.options = ['name', 'price', 'quantity'];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRemove() {
    this.cartService.removeAllProducts();
    this.cartContent = this.cartService.getCartContent();
  }

  chooseSorting(value) {
    this.sorting = value;
  }
}
