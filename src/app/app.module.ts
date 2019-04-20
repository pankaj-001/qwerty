import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ChangePwdComponent } from './shared/components/change-pwd/change-pwd.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {FormsModule} from '@angular/forms'
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http'
import { RegisterComponent } from './shared/components/register/register.component';
import {SharedModule} from './shared/modules/shared.module'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangePwdComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
