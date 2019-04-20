import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service'

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  products:any=[];
  imgPath:string='';
  constructor(private serverCall:ServercallService) {
    this.imgPath=this.serverCall.imagePath;
   }
  ngOnInit() {
    this.fnSetCartData();

  }

  fnSetCartData(){
    this.serverCall.sendGetRequest('users/itemsList?id='+sessionStorage.getItem('id'))
    .subscribe((res:any)=>{
      if(res.length > 0){
      this.products=res[0].cart;
      }
    })
  }

  fnRemoveFromCart(productObj){
     let dataObj={
       'id':sessionStorage.getItem('id'),
       'product':productObj
     }
     this.serverCall.sendPostRequest('users/deleteFromCart',dataObj)
     .subscribe((res:any)=>{
       if(res.ok== 1 && res.n==1){
        this.fnSetCartData();
        alert('removed from cart');

       }
     })
  }

}
