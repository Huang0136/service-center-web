"use strict";
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
 * Created by huanggh on 2016/12/23.
 */
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.loginSuccess = true;
        this.loginMessage = "用户名与密码不正确!";
    }
    // 登录
    LoginComponent.prototype.login = function (username, password) {
        this.loginSuccess = this.loginService.login(username, password);
    };
    // 登录错误消息去除
    LoginComponent.prototype.removeLoginMessage = function () {
        this.loginSuccess = true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: '/app/common/login/login.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map