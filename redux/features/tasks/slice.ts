import { TaskType } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SetCompletePayload } from "./types";

const initialState: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    dueDate: new Date().getTime(),
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    dueDate: new Date().getTime(),
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3 description",
    dueDate: new Date().getTime(),
    completed: true,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCompleted: (state, action: PayloadAction<SetCompletePayload>) => {
      const { id, completed } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.completed = completed;
      }
    },
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload);
    },
  },
});

export const { setCompleted, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
