import { Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { MyOdersComponent } from './my-oders/my-oders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthGuard } from './services/auth/auth.guard';

export const appRoutes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/product-details/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'my-orders', component: MyOdersComponent, canActivate: [AuthGuard] },
    { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },

]