import {Resource} from "../bean/resource";
/**
 *author:huanggh
 *create on:2016/12/24 10:37
 *description:
 **/

export class UtilsService{

  /**
   * 是否登录
   * 从缓存中读取登录信息
   * @returns {boolean}
     */
  public isLogin():boolean {

    return false;
  }

  /**
   * 功能:获取当前用户的菜单
   * @returns {Resource[]}
     */
  public getResources(): Resource[]{
    let rs: Resource[] = [];

    let r1: Resource = new Resource("1",null,"主页",1,"about","","fa fa-home");
    rs.push(r1);

    let r2: Resource = new Resource("2",null,"系统管理",2,"","","fa fa-pie-chart");
    rs.push(r2);

    let r5: Resource = new Resource("6","2","用户类",2,"","","fa fa-clock-o");
    let r3: Resource = new Resource("3","2","404",1,"error/404","","fa fa-address-card");

    var r6: Resource = new Resource("7","6","用户管理",1,"log","","fa fa-address-card");

    r2.childResources.push(r3);
    r2.childResources.push(r5);

    r5.childResources.push(r6);

    let r4: Resource = new Resource("5",null,"基础管理",3,"user","","fa fa-youtube-play");
    rs.push(r4);

    return rs;
  }

  private sortResource(resources: Resource[]): Resource[] {
    let rs: Resource[] = resources;

    if(resources != null && resources.length > 1) {
      var rsLv0: Resource[] = [];

      resources.forEach(r => {
        if(r.pId == null || r.pId == "") {
          rsLv0.push(r);

        }
      });

    }

    return rs
  }

}
