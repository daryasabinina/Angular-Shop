import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from '../../product/product.model';

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

  onRemove(product: Product) {
    this.cartService.removeProduct(product);

  }

  onIncrease(product: Product) {
    this.cartService.changeProductQuantity(product, 1);
  }

  onDecrease(product: Product) {
    this.cartService.changeProductQuantity(product, -1);
  }

}
