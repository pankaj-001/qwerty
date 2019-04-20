import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import {customerRouting} from './customer.routes';
import {CustomerComponent} from './customer.component';
import {SharedModule} from '../shared/modules/shared.module'
@NgModule({
  imports: [
    CommonModule,
    customerRouting,
    SharedModule
  ],
  declarations: [ CustomerComponent, HomeComponent, ProductsListComponent, ProductViewComponent, CartViewComponent, OrdersViewComponent, ProfileComponent, OrderSuccessComponent]
})
export class CustomerModule { }
