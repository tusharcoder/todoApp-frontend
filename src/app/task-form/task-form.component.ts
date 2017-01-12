/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-10T22:33:36+05:30
* @Email:  tamyworld@gmail.com
* @Filename: task-form.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T13:31:36+05:30
*/



import { Component, OnChanges, Input } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';
import {EmitChangesService} from '../emit-changes.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges {
  private editmode = false;
  constructor(
    private taskService:TaskService,
  ) { }
  private model = new Task('','');
  @Input() listId;
  @Input() editId;
  submitTask(body:Task){
    let commentOperation:Observable<Task[]>;
    if(this.editmode){
      commentOperation=this.taskService.updateTask(this.model);
    }else{
      commentOperation=this.taskService.addTask(this.model);
    }
    commentOperation.subscribe(tasks=>{
      EmitChangesService.get(this.listId).emit(tasks);
      this.model=new Task('','');
      if(this.editmode)this.editmode=!this.editmode;
    });
  }
  ngOnChanges() {
    EmitChangesService.get(this.editId).subscribe(task=>{
      this.model=task;
      this.editmode=true;
    })
  }

}
