import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service'
import { Subscriber } from 'rxjs/internal/Subscriber';
import {Router} from '@angular/router'
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  headers:any=['UID','PASSWORD','EMAIL','PHONE'];
  data:any=[];
  hasImage:boolean=false;
  keys:any=['uid','pwd','email','phone'];
  constructor(private shared:SharedService,private serverCall:ServercallService,private router:Router) { }

  ngOnInit() {
      this.fnGetUsers();
  }
  fnGetUsers(){
    this.serverCall.sendPostRequest('users/getUsers',{'role':'vendor'})
    .subscribe((res)=>{
      this.data=res;
    })
  }
  fnEdit(data){
    this.router.navigateByUrl('admin/createVendor');
    window.setTimeout(()=>{
        this.shared.setUserInfo(data);
    },50);
  }

  fnDelete(data){
    var isOk=confirm('r u sure...');
    if(isOk){
       this.serverCall.sendGetRequest('users/deleteUser?id='+data._id)
       .subscribe((res)=>{
          if(res['ok'] == 1){
            this.fnGetUsers();
            alert('delete successfully');
          }else{
            alert('not delted');
          }
       })
    }
  }

}
