/**
 * Created by huanggh on 2017/1/5.
 */
"use strict";
// 分页
var Paging = (function () {
    function Paging(pageSize, currentPage, count, results) {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.count = count;
        this.results = results;
        this.totalPage = count > 0 ? (count % pageSize == 0 ? count % pageSize : (count / pageSize + 1)) : 0;
    }
    return Paging;
}());
exports.Paging = Paging;
//# sourceMappingURL=paging.js.map