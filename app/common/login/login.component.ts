/**
 * Created by huanggh on 2016/12/23.
 */
import {Component} from "@angular/core";
import {LoginService} from "./login.service";

@Component({
  selector:'login',
  templateUrl:'/app/common/login/login.html'
})

export class LoginComponent {
  private loginSuccess: boolean = true;
  private loginMessage: string = "用户名与密码不正确!";

  constructor(private loginService: LoginService) {

  }

  // 登录
  login(username: string, password: string) {
    this.loginSuccess = this.loginService.login(username, password);
  }

  // 登录错误消息去除
  removeLoginMessage(){
    this.loginSuccess = true;
  }

}

