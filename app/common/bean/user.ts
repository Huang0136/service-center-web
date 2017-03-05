/**
 * Created by huanggh on 2016/12/25.
 */

export class User1{
  public username: string;
  public age: number;

  constructor(
    private username: string,
    private age: number
  ){
    this.username = username;
    this.age = age;
  }
}
