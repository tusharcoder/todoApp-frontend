/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-10T22:33:36+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T13:48:07+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TaskModule} from './task/task.module';

import {EmitChangesService} from './emit-changes.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TaskModule
  ],
  providers: [
    EmitChangesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
