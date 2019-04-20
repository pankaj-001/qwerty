import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service'
import {Router} from '@angular/router';
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  headers:any=['Image','Title','Cost'];
  data:any=[];
  keys:any=['title','cost'];
  hasImage:boolean=true;

  constructor(private shared:SharedService,private router:Router,private serverCall:ServercallService) { }

  ngOnInit() {
    this.fnGetProdcuts();
  }

  fnGetProdcuts(){
     this.serverCall.sendGetRequest('products/myProducts?id='+sessionStorage.getItem('id'))
     .subscribe((res)=>{
       this.data=res;
     });
  }

  fnEdit(data){
    this.router.navigateByUrl('vendor/createProduct');
    window.setTimeout(()=>{
         this.shared.setProductInfo(data);
    },100)

  }

  fnDelete(data){
    let isOk=confirm('r u sure...');
    if(isOk){
        this.serverCall.sendGetRequest('products/deleteProduct?id='+data._id)
        .subscribe((res:any)=>{
          if(res.ok == 1 || res.n == 1){
             alert('deltes successfully');
             this.fnGetProdcuts();

          }
        })
    }
  }

}
