import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id ='7722d5b2802b5a2bb635';
  private client_secret = '2b52de16771e55df050c0d307914ccea27517cbc';
  constructor(private _http:Http){
    console.log('Github Service ready...');
    this.username = 'pankaj0812';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json())
  }

  updateUser(username:string){
    this.username =username;
  }
}
