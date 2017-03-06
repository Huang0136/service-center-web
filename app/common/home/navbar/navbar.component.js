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
 * Created by huanggh on 2016/12/27.
 */
var core_1 = require("@angular/core");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    /**
     * 展开或收起菜单
     * @param ulId
       */
    NavbarComponent.prototype.clickParentMenuLink = function (id) {
        var ulElement = document.getElementById("navbar_children_ul_" + id); // ul元素
        var style = ulElement.getAttribute("style"); // 旧样式
        var iElement = document.getElementById("navbar_children_i_" + id);
        var iClass = iElement.getAttribute("class");
        if (style.indexOf("display:none") != -1) {
            style = style.replace("display:none", "display:block");
            iClass = iClass.replace("fa-plus-square-o", "fa-minus-square-o ");
        }
        else {
            style = style.replace("display:block", "display:none");
            iClass = iClass.replace("fa-minus-square-o", "fa-plus-square-o");
        }
        ulElement.setAttribute("style", style);
        iElement.setAttribute("class", iClass);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavbarComponent.prototype, "resources", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/common/home/navbar/navbar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map