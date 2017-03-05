/**
 * Created by huanggh on 2016/12/25.
 */
import {User1} from 'app/common/bean/user';
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
  private url: string = "http://localhost:80/user";
  private users: User1[];

  constructor(
    private http: Http
  ){}

  /**
   *
   */
  getUser(): Promise<User1[]>{
     return this.http.get(this.url).toPromise().then(response => response.json() as User1[])
      .catch();
  }
}





















