import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../services/servercall.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any={
    'uid':'',
    'pwd':'',
    'email':'',
    'phone':''
  };
  msg:string='';
  constructor(private serverCall:ServercallService) { }

  ngOnInit() {
  }

  fnRegister(){
    let dataObj=this.data;
    if(window.location.hash == '#/register'){
      dataObj.role='customer';
    }

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
