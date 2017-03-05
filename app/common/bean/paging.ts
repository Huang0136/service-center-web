/**
 * Created by huanggh on 2017/1/5.
 */

// 分页
export class Paging {
  public pageSize: number;// 分页大小
  public currentPage: number;// 当前页
  public totalPage: number;// 总页数
  public count: number;// 总记录数
  public results: Array<any>;// 结果集

  constructor(
    pageSize: number,
    currentPage: number,
    count: number,
    results: Array<any>
  ){
    this.pageSize = pageSize;
    this.currentPage = currentPage;
    this.count = count;
    this.results = results;
    this.totalPage = count>0?(count%pageSize==0?count%pageSize:(count/pageSize+1)):0;
  }
}
