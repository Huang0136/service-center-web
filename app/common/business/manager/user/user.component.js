"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huanggh on 2016/12/25.
 */
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var user_1 = require("../../../bean/user");
var http_1 = require("@angular/http");
var paging_1 = require("../../../bean/paging");
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent(userService, http) {
        this.userService = userService;
        this.http = http;
        this.enabledToFirstPage = true;
        this.http = http;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reqUrl = "/user";
        this.http.get(reqUrl).subscribe(function (resp) {
            console.log(resp);
        });
        this.users = null;
        var rs = new Array();
        rs.push(new user_1.User1("huanggh", 22));
        rs.push(new user_1.User1("huangfm", 22));
        rs.push(new user_1.User1("Sunwx", 13));
        var userPaging = new paging_1.Paging(20, 3, 500, rs);
        this.userPaging = userPaging;
        console.log(this.userPaging);
        this.userService.getUser().then(function (resp) {
            _this.users = resp;
            console.log(resp);
        });
        /*
        this.http.request("http://127.0.0.1:8088/user").subscribe((resp: Response) => {
          let r1 = resp.json();
    
          console.log(r1);
        });
        */
    };
    UserComponent.prototype.getUsers = function () {
    };
    UserComponent.prototype.getUser = function () {
    };
    UserComponent.prototype.addUser = function () {
    };
    UserComponent.prototype.deleteUser = function () {
        console.log("delete");
    };
    UserComponent.prototype.modifyUser = function () {
    };
    UserComponent.prototype.clickAll = function (value) {
        console.log("选中所有" + value);
        if (value) {
            var allInputs = document.getElementsByClassName("checkbox_temp");
            for (var i = 1; i < allInputs.length; i++) {
            }
        }
        else {
        }
        //
        //setChecked()
    };
    UserComponent.prototype.clickOne = function (id) {
        console.log("选中:" + id);
    };
    UserComponent.prototype.pageSizeChange = function (value) {
        console.log(value);
    };
    UserComponent.prototype.firstPage = function () {
        console.log("第一页");
    };
    UserComponent.prototype.lastPage = function () {
        console.log("最后一页");
    };
    UserComponent.prototype.previousPage = function () {
        console.log("上一页");
    };
    UserComponent.prototype.nextPage = function () {
        console.log("下一页");
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/common/business/manager/user/user.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, http_1.Http])
    ], UserComponent);
    return UserComponent;
}(core_1.OnInit));
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map