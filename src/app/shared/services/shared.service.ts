import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
 private userInfoSub=new Subject<any>();
 private productInfoSub=new Subject<any>();
 productInfo:any={};
  constructor() { }

  setUserInfo(data){
     this.userInfoSub.next(data);
  }

  setProductInfo(data){
       this.productInfoSub.next(data);
  }

  getProductInfo(){
    return this.productInfoSub.asObservable();
  }

  getUserInfo(){
    return this.userInfoSub.asObservable();
  }

  fnCheckForImage(fileName){
     let fileArr=fileName.split('.');
     let ext=fileArr.pop();
     if(ext == 'jpeg' || ext == 'jpg'){
       return true;
     }else{
       return false;
     }
  }

}
