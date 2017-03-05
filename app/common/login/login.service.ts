/**
 * Created by huanggh on 2016/12/23.
 */

import {systemConfigTemp} from '../config/config';

export class LoginService{

  public login(username: string,password: string) :boolean{
    if(username == password) {
      systemConfigTemp.isLogin = true;
      systemConfigTemp.currentUser.username = username;
      systemConfigTemp.currentUser.password = password;
      console.log("登录成功!\nusername:"+username+",password:"+password);
      return true;
    } else {
      console.log("登录失败!\nusername:"+username+",password:"+password);
      return false;
    }
  }
}
