import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders}  from "@angular/common/http";
import{Observable} from 'rxjs/Observable';
import {global} from './global';

@Injectable()
export class AnalisisService{
  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url= global.url;
  }

  getProject(user):Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'analisis/'+user,{headers:headers});
  }
}