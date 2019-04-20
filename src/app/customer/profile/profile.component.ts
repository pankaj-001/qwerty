import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../shared/services/servercall.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo:any={
    'pwd':'',
    'email':'',
    'phone':'',
    'delAdd':''
  }
  constructor(private serverCall:ServercallService) { }

  ngOnInit() {
    this.serverCall.sendGetRequest('users/itemsList?id='+sessionStorage.getItem('id'))
    .subscribe((res:any)=>{
      if(res.length > 0){
         this.userInfo=res[0];
         delete this.userInfo.cart;
         delete this.userInfo.orders;
      }
    })
  }
  fnUpdate(){
    this.serverCall.sendPostRequest('users/updateUser',this.userInfo)
    .subscribe((res:any)=>{
       if(res.n==1 && res.ok==1){
         alert('updaetd');
       }
    })
  }

}
