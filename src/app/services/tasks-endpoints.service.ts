import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './api-endpoints.service';
import { ApiHttpService } from './api-http-service.service';
import { Task } from '../models/taskinterface';
import { StatusTask } from '../models/statusTaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksEndpointsService {

  public apiPath:string = "tasks/";

  constructor( private apiEndPoint: ApiEndpointsService, private apiHttp: ApiHttpService ) { }

  /**
   * Return all tasks
   */
  public getTasks(){
    return this.apiHttp.get(this.apiEndPoint.createUrl(this.apiPath+"all"));
  }

  /**
   * Return a task by ID
   * @param taskId
   */
  public getTask(taskId: number){
    return this.apiHttp.get(this.apiEndPoint.createUrl(this.apiPath+`${taskId}`));
  }

  /**
   * Create a task
   * @param task
   */
  public createTask(task: Task){
    return this.apiHttp.post(this.apiEndPoint.createUrl(this.apiPath+"post"),task);
  }


  /**
   * Change a status task
   * @param task
   */
  public changeStatusTask(statusTask: StatusTask){
    return this.apiHttp.post(this.apiEndPoint.createUrl(this.apiPath+"post"),statusTask);
  }


}
