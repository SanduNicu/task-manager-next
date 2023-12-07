import React, { memo } from "react";
import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import { tasksSelector } from "@/redux/features/tasks/selectors";
import TableRow from "./TableRow";

function Body() {
  const tasks = useSelector(tasksSelector);

  return (
    <TableBody>
      {tasks.map((task) => (
        <TableRow key={task.id} {...task} />
      ))}
    </TableBody>
  );
}

export default memo(Body);
