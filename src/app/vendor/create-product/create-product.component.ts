import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {ServercallService} from '../../shared/services/servercall.service';
import {SharedService} from '../../shared/services/shared.service'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  file:any;
  data:any={
    title:'',
    'cost':''
  };
  imgPath:string='';
  isEdit:boolean=false;
  msg:string='';
  public uploader: FileUploader = new FileUploader({url: "http://localhost:2020/products/upload", itemAlias: 'photo'});
  constructor(private shared:SharedService,private serverCall:ServercallService) {
      this.shared.getProductInfo().subscribe((data)=>{
          this.data=data;
          this.imgPath=this.serverCall.imagePath+data._id+'.jpg';
          this.isEdit=true;
      });
   }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    };
  }

  fnUpdateProduct(){
    if(this.uploader.queue.length > 0){
      let fileInfo=this.uploader.queue[0];
      let fileName=fileInfo.file.name;
      let isImage=this.shared.fnCheckForImage(fileName);
      if(!isImage){
        alert('plese upload images only');
        return;
      }
    }
    this.serverCall.sendPostRequest('products/updateProduct',this.data)
    .subscribe((res:any)=>{
        if(res.n==1 && res.ok==1){
            this.msg="success";
            if(this.uploader.queue.length > 0){
              this.uploader.queue[0].file.name=this.data._id+".jpg";
              this.uploader.queue[0].upload();
            }
        } else{
          this.msg="not updated"
        }
    })
  }
  

  fnCreateProduct(){
    if(this.uploader.queue.length == 0){
      alert('please upload file');
      return;
    }
    let fileInfo=this.uploader.queue[0];
    let fileName=fileInfo.file.name;
    let isImage=this.shared.fnCheckForImage(fileName);
    if(!isImage){
      alert('plese upload images only');
      return;
    }
    this.data.vid=sessionStorage.getItem('id');
    this.serverCall.sendPostRequest('products/addProduct',{'data':this.data})
    .subscribe((res:any)=>{
      if(res._id){
        this.msg="success";
        this.uploader.queue[0].file.name=res._id+".jpg";
        this.uploader.queue[0].upload();
      }else{
        this.msg="fail"
      }
    })
  }

}
