import {Routes,RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {HomeComponent} from './home/home.component';
import {VendorListComponent} from './vendor-list/vendor-list.component';
import {CreateVendorComponent} from './create-vendor/create-vendor.component';

const routes:Routes=[
       {
           path:'',
           component:AdminComponent,
           children:[
               {path:'',redirectTo:'home',pathMatch:'full'},
               {path:'home', component:HomeComponent},
               {path:'createVendor', component:CreateVendorComponent},
               {path:'vendorsList', component:VendorListComponent}
           ]
       }
]


export const admingRouting=RouterModule.forChild(routes);
