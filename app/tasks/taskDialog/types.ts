import { TaskType } from "@/app/types";

export type Inputs = Omit<TaskType, "id" | "completed">;
