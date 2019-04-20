import { Component, OnInit } from '@angular/core';
import {ServercallService} from '../../services/servercall.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any={
    'uid':'',
    'pwd':''
  }
  msg:string='';
  constructor(private server:ServercallService,private router:Router) { }

  ngOnInit() {
  }

  fnLogin(){
    this.server.sendPostRequest('users/login',this.data)
    .subscribe((res:any)=>{
        if(res.length > 0){
           let userObj=res[0];
           let role=userObj.role;
           sessionStorage.setItem('id',userObj._id);
           sessionStorage.setItem('uid',userObj.uid);
           sessionStorage.setItem('role',role);
           if(role == 'admin'){
             this.router.navigateByUrl('admin');
           }else if(role == 'customer'){
            this.router.navigateByUrl('customer');
           }else{
            this.router.navigateByUrl('vendor');
           }
        }else{
          this.msg="pleae chekc uid or pwd";
        }
    });
  }



}
