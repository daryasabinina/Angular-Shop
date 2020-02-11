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


  getCartContent(): Array<Product> {
    return cart;
  }

  getQuantity() {
    // попробуйте поменять forEach на reduce
    let quantity = 0;
    cart.forEach((cartitem) => {
      quantity += cartitem.quantity;
    });

    return quantity;
  }

  getFullPrice() {
    // комментарий аналогичен предыдущему
    let price = 0;
    cart.forEach((cartitem) => {
      price += cartitem.quantity * cartitem.price;
    });

    return price;
  }

  cleanCart() {
    cart = []; // это подход немутируемых данных
    this.channel.next();
  }

  addToCart(product) {
    let existingProductIndex;

    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        existingProductIndex = i;
      }
    });

    existingProductIndex ? cart[existingProductIndex].quantity += 1 : cart.push(product); // а это подход мутируемых данных. желательно придерживатся одного подхода
    this.channel.next();
  }

  removeProduct(product) {
    // так лучше не делать. используйте findIndex + splice
    cart.forEach((cartitem, i) => {
      if (cartitem.name === product.name) {
        cart.splice(i, 1);
      }
    });

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

    this.channel.next();
  }
}
