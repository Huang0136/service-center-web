"use strict";
/**
 * Created by huanggh on 2016/12/23.
 */
var Config = (function () {
    function Config(isLogin, currentUser) {
        this.isLogin = isLogin;
        this.currentUser = currentUser;
        this.isLogin = isLogin;
        this.currentUser = currentUser;
    }
    return Config;
}());
exports.Config = Config;
var User = (function () {
    function User(username, password, age, loginDate, lastOperationTime) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.loginDate = loginDate;
        this.lastOperationTime = lastOperationTime;
    }
    return User;
}());
exports.User = User;
exports.systemConfigTemp = new Config(false, new User("huanggh", "***", 22, new Date(), 0));
//# sourceMappingURL=config.js.map