import { TaskType } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SetCompletePayload, UpdateTaskPayload } from "./types";
import { Inputs } from "@/app/tasks/taskDialog/types";

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

export const { setCompleted, addTask, deleteTask, updateTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
