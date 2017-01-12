/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-12T12:47:34+05:30
* @Email:  tamyworld@gmail.com
* @Filename: task-list.component.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-12T17:56:04+05:30
*/



import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {TaskService} from '../task.service';
import {EmitChangesService} from '../emit-changes.service';
import {Task} from '../task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit,OnChanges {

  constructor(
    private taskService:TaskService
  ) { }
  private taskList:Task[];
  @Input() listId;
  @Input() editId;
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks(){
    this.taskService.gettasks().subscribe(tasks=>{
      this.taskList=tasks;
    },error=>{
      console.log(error);
    });
  }

  ngOnChanges(){
    EmitChangesService.get(this.listId).subscribe(tasks=>{
      this.loadTasks();
      });
  }
  editTask(task:Task){
    this.taskService.updateTask(task).subscribe(tasks=>{
      EmitChangesService.get(this.editId).emit(tasks);
      });
    }
  removeTask(id:string){
      this.taskService.removeTask(id).subscribe(tasks=>{
        //emit the payload where the changes happened i.e. tasks is the payload
        EmitChangesService.get(this.listId).emit(tasks);
      },error=>{
        console.log(error);
      });
  }
  increasePriority(task:Task){
    task.priority-=1;
    this.taskService.updateTask(task).subscribe(tasks=>{
      EmitChangesService.get(this.listId).emit(tasks);
    })
  }
  decreasePriority(task:Task){
    task.priority+=1;
    this.taskService.updateTask(task).subscribe(tasks=>{
      EmitChangesService.get(this.listId).emit(tasks);
    })
  }
}
