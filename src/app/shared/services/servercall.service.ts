import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServercallService {
  baseUrl:string="http://localhost:2020/"
  imagePath:string="http://localhost:2020/images/"
  constructor(private http:HttpClient) { }

  sendPostRequest(url,data){
   return  this.http.post(this.baseUrl+url,data);
  }

  sendGetRequest(url){
    return this.http.get(this.baseUrl+url);
  }

  uploadPhoto(url,data){
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": undefined })
    }
    return  this.http.post(this.baseUrl+url,data);
  }

}
