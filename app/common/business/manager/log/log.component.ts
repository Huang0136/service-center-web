/**
 * Created by huanggh on 2016/12/25.
 */
import {Component} from "@angular/core";

@Component({
  selector:'log',
  templateUrl:'app/common/business/manager/log/log.html'
})

export class LogComponent{
  private logs: string[];

  constructor(){
    this.logs = ["log1...","log2..."];
  }
}
