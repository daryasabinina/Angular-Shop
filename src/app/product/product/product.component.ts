import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product;
  @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {
  }

  onBuy(product: Product) {
    this.buyProduct.emit(product);
  }
}
