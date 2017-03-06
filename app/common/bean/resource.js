/**
 * Created by huanggh on 2016/12/26.
 */
"use strict";
var Resource = (function () {
    function Resource(id, pId, name, order, href, style, linkIcon) {
        this.id = id;
        this.pId = pId;
        this.name = name;
        this.order = order;
        this.href = href;
        this.style = style;
        this.linkIcon = linkIcon;
        this.id = id;
        this.pId = pId;
        this.name = name;
        this.order = order;
        this.href = href;
        this.style = style;
        this.linkIcon = linkIcon;
        this.childResources = [];
    }
    return Resource;
}());
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map