import React, { memo } from "react";
import {
  Checkbox,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
function Body() {
  return (
    <TableBody>
      {mockedTasks.map((task) => (
        <TableRow key={task.id}>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{task.title}</TableCell>
          <TableCell>{task.description}</TableCell>
          <TableCell>{task.dueDate.toLocaleDateString()}</TableCell>
          <TableCell>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default memo(Body);
