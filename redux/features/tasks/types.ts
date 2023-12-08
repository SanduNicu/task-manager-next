import { Inputs } from "@/app/tasks/taskDialog/types";

export interface SetCompletePayload {
  id: number;
  completed: boolean;
}

export interface UpdateTaskPayload {
  id: number;
  data: Inputs;
}
