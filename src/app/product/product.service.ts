import { Injectable } from '@angular/core';

import { Product } from './product.model';

const tshirt = new Product('t-shirt', 'basic top item', false, 15, 1);
const candy = new Product('Candy', 'delicious item', true, 5, 1);
const cucumber = new Product('cucumber', 'vegetable', true, 7, 1);
const dress = new Product('dress', 'basic women item', true, 150, 1);

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [candy, tshirt, dress, cucumber];
  }
}
