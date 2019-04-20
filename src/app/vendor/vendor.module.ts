import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import {vendorRouting} from './vendor.routes';
import {SharedModule} from '../shared/modules/shared.module';

import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  imports: [
    CommonModule,
    vendorRouting,
    SharedModule
  ],
  declarations: [FileSelectDirective,VendorComponent, CreateProductComponent, ProductsListComponent, HomeComponent]
})
export class VendorModule { }
