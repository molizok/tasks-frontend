export interface TaskInterface{
  id: number; // 123,
  title: string; // "minha task 1",
  description: string; // "minha task 1",
  status: boolean; // 0
}
export class Task implements TaskInterface{
  id: number;
  title: string;
  description: string;
  status: boolean;
}
