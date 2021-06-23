import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() product: any
  @Output() cartAdded = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  cartActive(product: any) {
    this.cartAdded.emit(product)
    product.isAddedToCart = true
  }

}
