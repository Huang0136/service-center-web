"use strict";
var resource_1 = require("../bean/resource");
/**
 *author:huanggh
 *create on:2016/12/24 10:37
 *description:
 **/
var UtilsService = (function () {
    function UtilsService() {
    }
    /**
     * 是否登录
     * 从缓存中读取登录信息
     * @returns {boolean}
       */
    UtilsService.prototype.isLogin = function () {
        return false;
    };
    /**
     * 功能:获取当前用户的菜单
     * @returns {Resource[]}
       */
    UtilsService.prototype.getResources = function () {
        var rs = [];
        var r1 = new resource_1.Resource("1", null, "主页", 1, "about", "", "fa fa-home");
        rs.push(r1);
        var r2 = new resource_1.Resource("2", null, "系统管理", 2, "", "", "fa fa-pie-chart");
        rs.push(r2);
        var r5 = new resource_1.Resource("6", "2", "用户类", 2, "", "", "fa fa-clock-o");
        var r3 = new resource_1.Resource("3", "2", "404", 1, "error/404", "", "fa fa-address-card");
        var r6 = new resource_1.Resource("7", "6", "用户管理", 1, "log", "", "fa fa-address-card");
        r2.childResources.push(r3);
        r2.childResources.push(r5);
        r5.childResources.push(r6);
        var r4 = new resource_1.Resource("5", null, "基础管理", 3, "user", "", "fa fa-youtube-play");
        rs.push(r4);
        return rs;
    };
    UtilsService.prototype.sortResource = function (resources) {
        var rs = resources;
        if (resources != null && resources.length > 1) {
            var rsLv0 = [];
            resources.forEach(function (r) {
                if (r.pId == null || r.pId == "") {
                    rsLv0.push(r);
                }
            });
        }
        return rs;
    };
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map