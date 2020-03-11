import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../product/product.model';

const cart = [
  new Product('cucumber', 'vegetable', true, 7, 1),
  new Product('dress', 'basic women item', true, 150, 1)
];

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  // Observable string sources
  private channel = new Subject<string>();

  // Observable string streams
  public channel$ = this.channel.asObservable();

  get totalQuantity(): number {
    return this.getQuantity();
  }
  get totalSum(): number {
    return this.getFullPrice();
  }


  getCartContent(): Product[] {
    return cart;
  }

  getQuantity(): number {
    return cart.reduce((quantity, cartitem) => quantity += cartitem.quantity, 0);
  }

  getFullPrice(): number {
    return cart.reduce((price, cartitem) => price += cartitem.quantity * cartitem.price, 0);
  }

  removeAllProducts(): void {
    while (cart.length) {
      cart.pop();
    }

    this.channel.next();
  }

  addProduct(product: Product): void {
    let existingProductIndex = -1;

    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        existingProductIndex = i;
      }
    });

    existingProductIndex !== -1 ? cart[existingProductIndex].quantity += 1 : cart.push(product);

    this.channel.next();
  }

  removeProduct(product: Product): void {
    const index = cart.findIndex((cartitem) => cartitem.name === product.name);

    cart.splice(index, 1);
    this.channel.next();
  }

  changeProductQuantity(product: Product, value: number): void {
    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        cartitem.quantity += value;
      }
    });
    this.channel.next();
  }
}
