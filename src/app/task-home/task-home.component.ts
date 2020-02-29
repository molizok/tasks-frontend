import { Component, OnInit } from '@angular/core';
import { Task } from '../models/taskinterface';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { TasksEndpointsService } from '../services/tasks-endpoints.service';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  constructor(private taskService: TasksEndpointsService) { }

  public tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any|Task[]) => {
      this.tasks = data;
    });
  }

  onNewTask($evt: Task){
    this.tasks.push($evt);
  }

}
