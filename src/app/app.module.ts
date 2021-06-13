import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
