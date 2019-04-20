import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';
import {ServercallService} from '../../services/servercall.service'
@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {
  imgPath:string;
  @Input() headers;
  @Input() data;
  @Input() keys;
  @Input() hasImage;
  @Output() edit=new EventEmitter();
  @Output() delete=new EventEmitter();
  constructor(private serverCall:ServercallService) { 
    this.imgPath=this.serverCall.imagePath;
  }

  ngOnInit() {
  }

  fnEdit(rowData){
     this.edit.emit(rowData);
  }

  fnDelete(rowData){
    this.delete.emit(rowData);
  }

}
