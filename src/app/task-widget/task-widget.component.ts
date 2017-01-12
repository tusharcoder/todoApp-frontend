/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-12T13:20:33+05:30
* @Email:  tamyworld@gmail.com
* @Filename: task-widget.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T14:38:01+05:30
*/



import { Component, OnInit } from '@angular/core';
import {TaskFormComponent} from '../task-form/task-form.component';
import {TaskListComponent} from '../task-list/task-list.component';

@Component({
  selector: 'task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: ['./task-widget.component.css']
})
export class TaskWidgetComponent{

  constructor() { }
     private listId = "TASK_LIST_ID";
     private editId = "TASK_EDIT_ID";

}
