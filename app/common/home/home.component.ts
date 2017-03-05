/**
 *author:huanggh
 *create on:2016/12/24 10:19
 *description:
 **/
import {Component, OnInit} from "@angular/core";
import {Config, systemConfigTemp} from "../config/config";
import {Resource} from "../bean/resource";
import {UtilsService} from "../utils/utils.service";

@Component({
  selector:'home',
  templateUrl:'app/common/home/home.html'
})

export class HomeComponent extends OnInit{
  private config: Config;
  private resources: Resource[];

  constructor(
    private utilsService: UtilsService
  ){}

  ngOnInit() {
    this.config = systemConfigTemp;
    this.resources = this.utilsService.getResources();
    console.log(this.resources);

    console.log(window.locationbar);
    console.log(window.location);

  }

  /**
   * 搜索框
   * @param content
     */
  search(content: string) {
    console.log("search for:"+content);
  }

}
