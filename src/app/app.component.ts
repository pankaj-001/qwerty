import { Component } from '@angular/core';
import {Router,NavigationStart,NavigationEnd,Event} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osui';
  constructor(private router:Router){
    this.router.events.subscribe((event:Event)=>{
      debugger;
      const path=window.location.hash; 
      if(event instanceof NavigationEnd &&  path!= "#/login" && path!= "#/register"){
           let userInfo=sessionStorage.getItem('userInfo');
           if(!userInfo){
              this.router.navigateByUrl('login');
           }else{
             const userObj=JSON.parse(userInfo);
             const pathArr=path.split('/');
             if(userObj.role != pathArr[1]){
               this.router.navigateByUrl(userObj.role);
             }
            

           }
        }
        
    })
}
}
