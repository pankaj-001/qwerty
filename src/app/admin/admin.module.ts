import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import {admingRouting} from './admin.routes';
import {SharedModule} from '../shared/modules/shared.module'
@NgModule({
  imports: [
    CommonModule,
    admingRouting,
    SharedModule
  ],
  declarations: [AdminComponent, HomeComponent, VendorListComponent, CreateVendorComponent]
})
export class AdminModule { }
