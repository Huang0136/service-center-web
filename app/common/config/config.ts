import {Observable} from "rxjs/Rx";
/**
 * Created by huanggh on 2016/12/23.
 */

export class Config{
  public isLogin: boolean;
  public currentUser: User;

  constructor(
    private isLogin: boolean,
    private currentUser: User
  ) {

    this.isLogin = isLogin;
    this.currentUser = currentUser;
  }
}

export class User{
  public username: string;
  public password: string;
  public age: number;
  public loginDate: Date;
  public lastOperationTime: number;

  constructor(
    private username: string,
    private password: string,
    private age: number,
    private loginDate: Date,
    private lastOperationTime: number
  ){}
}

export const systemConfigTemp: Config = new Config(false,new User("huanggh","***",22,new Date(),0));
