import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: any;
  @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {
  }

  onBuy(product) {
    this.buyProduct.emit(product);
  }
}
