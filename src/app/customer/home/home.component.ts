import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service';
import {Router} from '@angular/router';
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any=[];
  imgPath:string='';
  totalData:any=[];
  searchText:string='';
  constructor(private shared:SharedService,private serverCall:ServercallService,private router:Router) {
       this.imgPath=this.serverCall.imagePath;
       this.serverCall.sendGetRequest('products/allProducts')
       .subscribe((res)=>{
         this.totalData=res;
         this.products=res;
       })
   }

  ngOnInit() {
      
  }

  fnProdcutClick(data){
    this.shared.productInfo=data;
    this.router.navigateByUrl('customer/viewProduct')
  }

  fnSearch(){
     this.products= this.totalData.filter((obj)=>{
                 return obj.title.includes(this.searchText)
      })
  }

}
