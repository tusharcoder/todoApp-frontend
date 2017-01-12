/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-12T13:32:15+05:30
* @Email:  tamyworld@gmail.com
* @Filename: task.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T13:41:45+05:30
*/



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';

import {TaskListComponent} from '../task-list/task-list.component';
import {TaskFormComponent} from '../task-form/task-form.component';
import {TaskWidgetComponent} from '../task-widget/task-widget.component';

import {TaskService} from '../task.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
  ],
  providers:[
TaskService
  ],
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskWidgetComponent,
  ],
  exports:[
    TaskListComponent,
    TaskFormComponent,
    TaskWidgetComponent,
  ]
})
export class TaskModule { }
