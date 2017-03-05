/**
 * Created by huanggh on 2016/12/26.
 */

export class Resource{
  public id: string;
  public pId: string;
  public name: string;
  public order: number;
  public href: string;
  public style: string;
  public linkIcon: string;

  public childResources: Resource[];// 子菜单

  constructor(
    private id: string,
    private pId: string,
    private name: string,
    private order: number,
    private href: string,
    private style: string,
    private linkIcon: string
  ){
    this.id = id;
    this.pId = pId;
    this.name = name;
    this.order = order;
    this.href = href;
    this.style = style;
    this.linkIcon =linkIcon;

    this.childResources = [];
  }
}
