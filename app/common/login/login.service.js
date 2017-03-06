/**
 * Created by huanggh on 2016/12/23.
 */
"use strict";
var config_1 = require('../config/config');
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.login = function (username, password) {
        if (username == password) {
            config_1.systemConfigTemp.isLogin = true;
            config_1.systemConfigTemp.currentUser.username = username;
            config_1.systemConfigTemp.currentUser.password = password;
            console.log("登录成功!\nusername:" + username + ",password:" + password);
            return true;
        }
        else {
            console.log("登录失败!\nusername:" + username + ",password:" + password);
            return false;
        }
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map