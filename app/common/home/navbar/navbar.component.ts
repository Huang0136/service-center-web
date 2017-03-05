/**
 * Created by huanggh on 2016/12/27.
 */
import {Component, Input} from "@angular/core";
import {Resource} from "../../bean/resource";

@Component({
  selector:'navbar',
  templateUrl:'app/common/home/navbar/navbar.html'
})

export class NavbarComponent{
  @Input() resources: Resource[];

  constructor(){}

  /**
   * 展开或收起菜单
   * @param ulId
     */
  clickParentMenuLink(id: string) {
    var ulElement: HTMLElement = document.getElementById("navbar_children_ul_"+id);// ul元素
    var style: string = ulElement.getAttribute("style");// 旧样式

    var iElement: HTMLElement = document.getElementById("navbar_children_i_"+id);
    var iClass: string = iElement.getAttribute("class");

    if(style.indexOf("display:none") != -1) {
      style = style.replace("display:none","display:block");
      iClass = iClass.replace("fa-plus-square-o","fa-minus-square-o ");
    } else {
      style = style.replace("display:block","display:none");
      iClass = iClass.replace("fa-minus-square-o","fa-plus-square-o");
    }
    ulElement.setAttribute("style",style);
    iElement.setAttribute("class",iClass);
  }

}
