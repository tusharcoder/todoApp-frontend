/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-10T22:39:50+05:30
* @Email:  tamyworld@gmail.com
* @Filename: task.service.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T15:03:43+05:30
*/



import { Injectable } from '@angular/core';
import {Http,RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Task} from "./task";


@Injectable()
export class TaskService {
  constructor(
    private http:Http
  ) { }
  private taskUrl="http://localhost:8000/api/tasks/";
  gettasks():Observable<Task[]>{
     return this.http.get(this.taskUrl).map(res=>res.json()).catch((error:any)=>Observable.throw((error)=>error.json()||'server Error'));
  }
  addTask(body:Task):Observable<Task[]>{
    let bodyString=JSON.stringify(body);
    let headers= new Headers({"content-type":"application/json"});
    let options= new RequestOptions({headers:headers});
    return this.http.post(this.taskUrl,bodyString,options).map(res=>res.json()).catch((error:any)=>Observable.throw((error)=>error.json()||'Server Error'));
  }
  updateTask(body:Task):Observable<Task[]>{
    let bodyString=JSON.stringify(body);
    let headers= new Headers({"content-type":"application/json"});
    let options=new RequestOptions({headers:headers});
    return this.http.put(`${this.taskUrl}${body['id']}/`,bodyString,options).map(res=>res.json()).catch((error:any)=>Observable.throw(error=>error.json()||"Server Error"));
  }
  removeTask(id:string):Observable<Task[]>{
    return this.http.delete(`${this.taskUrl}${id}/`).map(res=>res.json()).catch((error:any)=>Observable.throw((error)=>error.json()||'Server Error'));
  }
}
