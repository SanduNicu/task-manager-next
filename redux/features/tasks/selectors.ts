import { StoreType } from "../../store";

export const tasksSelector = (state: StoreType) => state.tasks;
export const taskSelector = (id: number) => (state: StoreType) =>
  state.tasks.find((el) => el.id === id);
