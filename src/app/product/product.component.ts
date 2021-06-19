import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: any = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduct()
  }

}
