"use client";

import React, { memo } from "react";
import {
  Checkbox,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { tasksSelector } from "@/redux/features/tasks/selectors";

function Body() {
  const tasks = useSelector(tasksSelector);
  return (
    <TableBody>
      {tasks.map((task) => (
        <TableRow key={task.id}>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{task.title}</TableCell>
          <TableCell>{task.description}</TableCell>
          <TableCell>{task.dueDate.toLocaleDateString("en-GB")}</TableCell>
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
