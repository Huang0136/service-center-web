"use strict";
var log_component_1 = require("../business/manager/log/log.component");
var user_component_1 = require("../business/manager/user/user.component");
var about_component_1 = require("../home/about/about.component");
var _404_error_component_1 = require("../error/404_error.component");
exports.appRoutes = [
    { path: 'log', component: log_component_1.LogComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'error/404', component: _404_error_component_1.Error404Component }
];
//# sourceMappingURL=routes.js.map