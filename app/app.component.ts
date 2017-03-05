import {Component, OnInit} from '@angular/core';
import {HomeComponent} from './common/home/home.component';
import {UtilsService} from "./common/utils/utils.service";
import {systemConfigTemp, Config} from './common/config/config';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.html',
  providers:[UtilsService]
})


export class AppComponent extends OnInit {
  private systemConfig: Config;

  constructor(
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    systemConfigTemp.isLogin = this.utilsService.isLogin();
    this.systemConfig = systemConfigTemp;
  }

}
