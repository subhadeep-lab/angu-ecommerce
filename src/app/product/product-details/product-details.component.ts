import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public productId: string;
  public productDetails: any

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.productId = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.productDetails = this.productService.getProductDetails(this.productId)
  }

  ngOnDestroy(): void {
    confirm("Are you sure to leave this page")
  }

}
