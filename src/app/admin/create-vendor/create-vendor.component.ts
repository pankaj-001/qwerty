import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared/services/shared.service'
import {ServercallService} from '../../shared/services/servercall.service'
@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  data:any={
    'uid':'',
    'pwd':'',
    'email':'',
    'phone':''
  };
  isEdit:boolean=false;
  msg:string='';
  constructor(private serverCall:ServercallService,private shared:SharedService) { 
     this.shared.getUserInfo().subscribe((data)=>{
          this.data=data;
          this.isEdit=true;
     })
  }

  ngOnInit() {
  }

  fnUpdate(){
    this.serverCall.sendPostRequest('users/updateUser',this.data)
    .subscribe((res)=>{
       if(res['n']== 1 && res['ok'] == 1){
         this.msg="udpated successfully"
         this.data={};
         this.isEdit=false;

       }else{
         this.msg="not updaed";
       }
    })
  }
    
  
  fnRegister(){
    let dataObj=this.data;
      dataObj.role='vendor';
    this.serverCall.sendPostRequest('users/addUser',{'data':dataObj})
    .subscribe((res)=>{
       if(res['n']== 1 && res['ok'] == 1){
         this.msg="regitered successfully"
       }else{
         this.msg="not inserted";
       }
    })


  }
}



