import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/taskinterface';
import { TasksEndpointsService } from '../services/tasks-endpoints.service';
import { StatusTask } from '../models/statusTaskInterface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  public tasks: Task[] = [];

  constructor(private taskService: TasksEndpointsService) { }

  ngOnInit(): void {}

  removeTask(index: number){
    this.tasks.splice(index,1);
  }

  changeStatusTask(index: number){
    this.tasks[index].status = !this.tasks[index].status;
    this.taskService.changeStatusTask(new StatusTask(this.tasks[index])).subscribe((data)=>{
      console.log('Return change status response: ', data);
    })
  }

}
