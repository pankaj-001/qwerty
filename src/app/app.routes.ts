import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './shared/components/login/login.component';
import {RegisterComponent} from './shared/components/register/register.component'
const routes:Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
    {path:'vendor',loadChildren:'./vendor/vendor.module#VendorModule'},
    {path:'customer',loadChildren:'./customer/customer.module#CustomerModule'},

]
 
export const routing=RouterModule.forRoot(routes,{useHash:true});