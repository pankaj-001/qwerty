import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service'
import {ServercallService} from '../../shared/services/servercall.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productInfo:any={};
  imgPath:string='';
  constructor(private router:Router,private serverCall: ServercallService,private shared:SharedService) { 
       this.imgPath=this.serverCall.imagePath;
       this.productInfo=this.shared.productInfo;
  }

  ngOnInit() {
  }

  fnAddToCart(){
      let dataObj={
        'id':sessionStorage.getItem('id'),
        'product':this.productInfo
      }
       this.serverCall.sendPostRequest('users/addToCart',dataObj)
       .subscribe((res:any)=>{
           if(res.n==1 && res.ok== 1){
              alert('added to card');
           }else{
             alert('somehtig went wrong');
           }
       }); 

  }

   fnOrderNow(){
    let dataObj={
      'id':sessionStorage.getItem('id'),
      'product':this.productInfo
    }
    this.serverCall.sendPostRequest('users/addOrder',dataObj)
     .subscribe((res:any)=>{
      if(res.n==1 && res.ok== 1){
        this.router.navigateByUrl('customer/success');
        
      }else{
        alert('somehtig went wrong');
      }
  }); 
  }

}
