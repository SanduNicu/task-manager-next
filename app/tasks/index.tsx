import React, { memo } from "react";
import Task from "./Task";
import { TaskType } from "@/app/types";

const mockedTasks: TaskType[] = [
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

function Tasks() {
  return (
    <div>
      <h1>Tasks:</h1>
      <div>
        {mockedTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default memo(Tasks);
