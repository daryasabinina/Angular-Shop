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

  // добавить тип для параметров ниже
  onRemove(product) {
    this.cartService.removeProduct(product);

  }

  onIncrease(product) {
    this.cartService.changeProductQuantity(product, 'sum'); // думаю лучше использовать +1, -1. Умножив на это число сразу прибавляем или отнимаем, код будет проще
  }

  onDecrease(product) {
    this.cartService.changeProductQuantity(product, 'sub');
  }

}
