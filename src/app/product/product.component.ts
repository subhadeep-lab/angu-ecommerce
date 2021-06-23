import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any = []
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduct()
  }

  addToCart(product: any) {
    this.cartService.addCart(product)
  }

}
