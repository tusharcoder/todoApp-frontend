/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-12T11:50:34+05:30
* @Email:  tamyworld@gmail.com
* @Filename: emit-changes.service.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T12:02:12+05:30
*/



import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitChangesService {

  constructor() { }
  private static _emitters:{[Id:string]:EventEmitter<any>}
  public static get(Id:string){
    if(!this._emitters[Id]){
      this._emitters[Id]=new EventEmitter();
    }
    return this._emitters[Id];
  }

}
