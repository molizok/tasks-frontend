import { Task } from './taskinterface';

export interface StatusTaskInterface{
  id: number; // 123,
  status: boolean; // 0
}
export class StatusTask implements StatusTaskInterface{
  id: number;
  status: boolean;

  constructor(task: Task){
    this.id = task.id;
    this.status = task.status;
  }
}
