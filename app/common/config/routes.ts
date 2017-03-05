/**
 * Created by huanggh on 2016/12/25.
 */
import {RouterModule,Routes} from '@angular/router';
import {LogComponent} from "../business/manager/log/log.component";
import {UserComponent} from "../business/manager/user/user.component";
import {AboutComponent} from "../home/about/about.component";
import {Error404Component} from "../error/404_error.component";

export const appRoutes: Routes = [
  {path:'log',component:LogComponent},
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'error/404',component:Error404Component}
];
