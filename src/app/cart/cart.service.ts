import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Product } from '../product/product.model';

let cart = [
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

  public cartProducts = this.getCartContent();
  public totalQuantity = this.getQuantity();
  public totalSum = this.getFullPrice();


  getCartContent(): Array<Product> {
    return cart;
  }

  getQuantity() {
    let quantity = 0;
    cart.forEach((cartitem) => {
      quantity += cartitem.quantity;
    });

    return quantity;
  }

  getFullPrice() {
    let price = 0;
    cart.forEach((cartitem) => {
      price += cartitem.quantity * cartitem.price;
    });

    return price;
  }

  removeAllProducts() {
    cart = [];

    this.updateCartData();
    this.channel.next();
  }

  addProduct(product) {
    let existingProductIndex;

    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        existingProductIndex = i;
      }
    });

    existingProductIndex ? cart[existingProductIndex].quantity += 1 : cart.push(product);

    this.updateCartData();
    this.channel.next();
  }

  removeProduct(product) {
    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        cart.splice(i, 1);
      }
    });

    this.updateCartData();
    this.channel.next();
  }

  changeProductQuantity(product, value) {
    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        if (value === 'sum') {
          cartitem.quantity += 1;
        } else if (value === 'sub') {
          cartitem.quantity -= 1;
        }
      }
    });
    this.updateCartData();
    this.channel.next();
  }

  updateCartData() {
    this.totalQuantity = this.getQuantity();
    this.totalSum = this.getFullPrice();
  }
}
