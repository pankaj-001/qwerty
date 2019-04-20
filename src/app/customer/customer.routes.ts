import {Routes,RouterModule} from '@angular/router';
import {CartViewComponent} from './cart-view/cart-view.component';
import {CustomerComponent} from './customer.component';
import {HomeComponent} from './home/home.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {OrdersViewComponent} from './orders-view/orders-view.component';
import {ProfileComponent} from './profile/profile.component';
import {OrderSuccessComponent} from './order-success/order-success.component';

const routes:Routes=[
    {
       path:'',
       component:CustomerComponent,
       children:[
           {path:'',redirectTo:'home',pathMatch:'full'},
           {path:'home',component:HomeComponent},
           {path:'profile',component:ProfileComponent},
           {path:'viewProduct',component:ProductViewComponent},
           {path:'viewOrders',component:OrdersViewComponent},
           {path:'viewCart',component:CartViewComponent},
           {path:'success',component:OrderSuccessComponent}
       ]
    }
]

export const customerRouting=RouterModule.forChild(routes);

