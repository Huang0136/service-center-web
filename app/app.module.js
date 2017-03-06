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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var login_component_1 = require("./common/login/login.component");
var home_component_1 = require("./common/home/home.component");
var login_service_1 = require("./common/login/login.service");
var router_1 = require("@angular/router");
var routes_1 = require('./common/config/routes');
var log_component_1 = require("./common/business/manager/log/log.component");
var user_component_1 = require("./common/business/manager/user/user.component");
var about_component_1 = require("./common/home/about/about.component");
var http_1 = require("@angular/http");
var user_service_1 = require("./common/business/manager/user/user.service");
var navbar_component_1 = require("./common/home/navbar/navbar.component");
var _404_error_component_1 = require("./common/error/404_error.component");
var paging_component_1 = require("./common/utils/paging.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [login_service_1.LoginService, user_service_1.UserService],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                log_component_1.LogComponent,
                user_component_1.UserComponent,
                about_component_1.AboutComponent,
                navbar_component_1.NavbarComponent,
                _404_error_component_1.Error404Component,
                paging_component_1.PagingComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map