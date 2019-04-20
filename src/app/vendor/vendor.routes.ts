import {Routes,RouterModule} from '@angular/router';
import {VendorComponent} from './vendor.component';
import {HomeComponent} from './home/home.component'
import {ProductsListComponent} from './products-list/products-list.component'
import {CreateProductComponent} from './create-product/create-product.component'
const routes:Routes=[
    {
        path:'',
        component:VendorComponent,
        children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:HomeComponent},
            {path:'createProduct',component:CreateProductComponent},
            {path:'products',component:ProductsListComponent}
        ]
    }
] 

export const vendorRouting=RouterModule.forChild(routes);