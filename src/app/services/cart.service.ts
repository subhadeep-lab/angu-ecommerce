import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartArr: any = []

  constructor() { }

  addCart(product: any) {
    return this.cartArr.push(product)
  }

  getCart() {
    return this.cartArr
  }

  getCount() {
    return this.cartArr.length
  }
  
}
