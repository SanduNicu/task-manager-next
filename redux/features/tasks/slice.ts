import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 description",
    dueDate: new Date(),
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    dueDate: new Date(),
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3 description",
    dueDate: new Date(),
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
