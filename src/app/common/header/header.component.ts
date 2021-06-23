import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartCount: number = null
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartCount()
  }

  getCartCount() {
    this.cartCount = this.cartService.getCount()
  }

}
