import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {LoginComponent} from "./common/login/login.component";
import {HomeComponent} from "./common/home/home.component";

import {LoginService} from "./common/login/login.service";
import {RouterModule} from "@angular/router";

import {appRoutes} from './common/config/routes';
import {LogComponent} from "./common/business/manager/log/log.component";
import {UserComponent} from "./common/business/manager/user/user.component";
import {AboutComponent} from "./common/home/about/about.component";
import {HttpModule} from "@angular/http";
import {UserService} from "./common/business/manager/user/user.service";
import {NavbarComponent} from "./common/home/navbar/navbar.component";
import {Error404Component} from "./common/error/404_error.component";
import {PagingComponent} from "./common/utils/paging.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:    [LoginService,UserService],
  declarations:
    [
      AppComponent,
      LoginComponent,
      HomeComponent,
      LogComponent,
      UserComponent,
      AboutComponent,
      NavbarComponent,
      Error404Component,
      PagingComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
