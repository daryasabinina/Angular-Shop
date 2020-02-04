import { Injectable } from '@angular/core';

import { Product } from './product.model';

const tshirt = {
  name: 't-shirt',
  description: 'basic top item',
  isAvailable: false,
  price: 15
} as Product;

const candy = {
  name: 'Candy',
  description: 'delicious item',
  isAvailable: true,
  price: 5
} as Product;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [candy, tshirt];
  }
}
