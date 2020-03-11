import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  getProducts: Promise<any>;

  constructor(
    public productService: ProductService,
    private cartService: CartService
  ) { }

  onBuyProduct(product: Product) {
    this.cartService.addProduct(product);
  }

  ngOnInit() {
    this.getProducts = this.productService.getProducts();
  }

}
