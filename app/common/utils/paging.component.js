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
 * Created by huanggh on 2017/1/5.
 */
var core_1 = require("@angular/core");
var paging_1 = require("../bean/paging");
var PagingComponent = (function (_super) {
    __extends(PagingComponent, _super);
    function PagingComponent() {
        _super.apply(this, arguments);
    }
    PagingComponent.prototype.ngOnInit = function () {
        var innerHtmlStr = "";
        this.tableHead.forEach(function (v) {
            innerHtmlStr += v;
        });
        document.getElementById("tableHeadId").innerHTML = innerHtmlStr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PagingComponent.prototype, "tableHead", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PagingComponent.prototype, "tableBodyRow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', paging_1.Paging)
    ], PagingComponent.prototype, "dataPaging", void 0);
    PagingComponent = __decorate([
        core_1.Component({
            selector: 'paging',
            templateUrl: 'app/common/utils/paging.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PagingComponent);
    return PagingComponent;
}(core_1.OnInit));
exports.PagingComponent = PagingComponent;
//# sourceMappingURL=paging.component.js.map