import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart-item.component.html',
  styleUrls: ['cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product: any;

  ngOnInit() {
  }

  // Добавить типі параметров
  onRemove(product) {
    this.cartService.removeProduct(product);

  }

  onIncrease(product) {
    this.cartService.changeProductQuantity(product, 'sum');
  }

  onDecrease(product) {
    this.cartService.changeProductQuantity(product, 'sub');
  }

}
