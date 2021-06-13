import { Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

export const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-details/:id', component: ProductCategoryComponent },
    { path: 'cart', component: CartComponent },

]