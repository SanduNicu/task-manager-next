import { Inputs } from "./types";

export const parseTask = (data: Inputs) => {
  return {
    id: new Date().getTime(),
    title: data.title,
    description: data.description,
    dueDate: data.dueDate ? new Date(data.dueDate).getTime() : null,
    completed: false,
  };
};

export const initialValues = {
  title: "",
  description: "",
  dueDate: null,
};
