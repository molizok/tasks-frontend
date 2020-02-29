import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/taskinterface';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.css']
})
export class HeaderButtonsComponent implements OnInit {

  public newTask: boolean = false;
  @Output() createdTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  createTask(){
    this.newTask = !this.newTask;
  }

  // On create a new task
  onCreateTask($event){
    this.createdTask.emit($event);
  }


  // On create a new task
  onCancelTask($event){
    this.newTask = $event;
  }

}
