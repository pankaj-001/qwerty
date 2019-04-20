import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service'
@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit {
  products:any=[];
  imgPath:string="";
  constructor(private serverCall:ServercallService) { 
    this.imgPath=this.serverCall.imagePath;
  }

  ngOnInit() {
    this.serverCall.sendGetRequest('users/itemsList?id='+sessionStorage.getItem('id'))
    .subscribe((res:any)=>{
      if(res.length > 0){
      this.products=res[0].orders;
      }
    })

  }

}
