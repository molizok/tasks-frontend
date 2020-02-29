import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface, Task } from 'src/app/models/taskinterface';
import { TasksEndpointsService } from 'src/app/services/tasks-endpoints.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    public task: Task = new Task();
    public show: boolean = true;

  constructor(private taskService: TasksEndpointsService) {
    this.show = true;
  }

  @Output() createTask: EventEmitter<Task> = new EventEmitter();
  @Output() cancelCreate: EventEmitter<boolean> = new EventEmitter();


  ngOnInit(): void {}

  /*
  On Create new Task
  */
  onCreate(){

    this.taskService.createTask(this.task).subscribe((data) => {
      console.log("Return create task: ", data);
      this.createTask.emit(this.task);
      this.cancelCreate.emit(false);
    });

  }

  /*
  On cancel the new Task
  */
  onCancel(){
    this.cancelCreate.emit(false);
  }

}
