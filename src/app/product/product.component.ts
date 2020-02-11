import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

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

  // модель есть, а параметр без типа, добавить тип
  onBuy(product) {
    this.buyProduct.emit(product);
  }
}
