import { Injectable } from '@angular/core';

import { Product } from '../product/product.model';

let cart = [
  { name: 'cucumber',
    description: 'vegetable',
    isAvailable: true,
    price: 7 } as Product,
  { name: 'dress',
    description: 'basic women item',
    isAvailable: true,
    price: 150 } as Product
];

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  getCartContent(): Array<Product> {
    return cart;
  }

  cleanCart() {
    cart = [];
  }
}
