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
 *author:huanggh
 *create on:2016/12/24 10:19
 *description:
 **/
var core_1 = require("@angular/core");
var config_1 = require("../config/config");
var utils_service_1 = require("../utils/utils.service");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(utilsService) {
        this.utilsService = utilsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.config = config_1.systemConfigTemp;
        this.resources = this.utilsService.getResources();
        console.log(this.resources);
        console.log(window.locationbar);
        console.log(window.location);
    };
    /**
     * 搜索框
     * @param content
       */
    HomeComponent.prototype.search = function (content) {
        console.log("search for:" + content);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/common/home/home.html'
        }), 
        __metadata('design:paramtypes', [utils_service_1.UtilsService])
    ], HomeComponent);
    return HomeComponent;
}(core_1.OnInit));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map