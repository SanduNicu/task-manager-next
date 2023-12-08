import { TaskType } from "@/app/types";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { SetCompletePayload, UpdateTaskPayload } from "./types";
import { Inputs } from "@/app/tasks/taskDialog/types";

const initialState: TaskType[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    hydrate: (_, action) => {
      return action.payload;
    },
    setCompleted: (state, action: PayloadAction<SetCompletePayload>) => {
      const { id, completed } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.completed = completed;
      }
    },
    addTask: (state, action: PayloadAction<Inputs>) => {
      const newTask = {
        id: new Date().getTime(),
        ...action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    updateTask: (state, action: PayloadAction<UpdateTaskPayload>) => {
      const { id, data } = action.payload;
      let task = state.find((el) => el.id === id);
      if (task) {
        task.title = data.title;
        task.description = data.description;
        task.dueDate = data.dueDate;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskIndex = state.findIndex((el) => el.id === action.payload);
      if (taskIndex !== -1) {
        state.splice(taskIndex, 1);
      }
    },
  },
});

export const { setCompleted, addTask, deleteTask, updateTask, hydrate } =
  tasksSlice.actions;

export default tasksSlice.reducer;
