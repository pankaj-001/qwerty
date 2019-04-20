import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {TableCompComponent} from '../components/table-comp/table-comp.component'
@NgModule({
  imports: [
    CommonModule,
     FormsModule
  ],
  exports:[
    TableCompComponent,
    FormsModule
  ],
  declarations: [TableCompComponent]
})
export class SharedModule { }
