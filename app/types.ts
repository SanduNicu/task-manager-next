export interface TaskType {
  id: number;
  title: string;
  description: string;
  dueDate: number | null;
  completed: boolean;
}
