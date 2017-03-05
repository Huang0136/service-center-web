/**
 * Created by huanggh on 2017/1/5.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Paging} from "../bean/paging";

@Component({
  selector:'paging',
  templateUrl:'app/common/utils/paging.html'
})

export class PagingComponent extends OnInit{
  @Input() private tableHead: Array<any>;
  @Input() private tableBodyRow: Array<any>;
  @Input() private dataPaging: Paging;

  ngOnInit() {
    var innerHtmlStr = "";
    this.tableHead.forEach(v => {
      innerHtmlStr += v;
    });

    document.getElementById("tableHeadId").innerHTML = innerHtmlStr;

  }

}
