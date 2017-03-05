/**
 * Created by huanggh on 2016/12/25.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User1} from "../../../bean/user";
import {Http, Response} from "@angular/http";
import {Paging} from "../../../bean/paging";

@Component({
  selector:'user',
  templateUrl:'app/common/business/manager/user/user.html',
  providers:[UserService]
})

export class UserComponent extends OnInit {
  private http: Http;
  private users: User1[];
  private userPaging: Paging;
  private enabledToFirstPage: boolean = true;

  constructor(
    private userService: UserService,
    private http: Http
  ) {
    this.http = http;
  }

  ngOnInit() {
    var reqUrl = "/user";
    this.http.get(reqUrl).subscribe((resp: Response)=>{
      console.log(resp);
    });

    this.users = null;

    var rs: Array<any> = new Array<any>();
    rs.push(new User1("huanggh",22));
    rs.push(new User1("huangfm",22));
    rs.push(new User1("Sunwx",13));

    var userPaging: Paging = new Paging(20,3,500,rs) ;

    this.userPaging = userPaging;

    console.log(this.userPaging);

    this.userService.getUser().then(resp => {
      this.users = resp;
      console.log(resp);
    });

    /*
    this.http.request("http://127.0.0.1:8088/user").subscribe((resp: Response) => {
      let r1 = resp.json();

      console.log(r1);
    });
    */
  }

  getUsers() {

  }

  getUser() {

  }

  addUser() {

  }

  deleteUser() {
    console.log("delete");
  }

  modifyUser() {

  }

  clickAll(value: any){
    console.log("选中所有"+value);

    if(value) {
      var allInputs: NodeListOf<Element> = document.getElementsByClassName("checkbox_temp");

      for(var i = 1;i< allInputs.length;i++) {
        // var inputTemp: NodeListOf = (NodeListOf)allInputs.item(i);

      }
    } else {

    }
    //
    //setChecked()

  }

  clickOne(id: string){
    console.log("选中:"+id);
  }

  pageSizeChange(value: any) {
    console.log(value);
  }

  firstPage() {
    console.log("第一页");
  }

  lastPage() {
    console.log("最后一页");
  }

  previousPage() {
    console.log("上一页");
  }

  nextPage() {
    console.log("下一页");
  }

}
