import React, { memo, useCallback } from "react";
import {
  Checkbox,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";
import { TaskType } from "@/app/types";
import clsx from "clsx";
import { useAppDispatch } from "@/redux/store";
import { setCompleted } from "@/redux/features/tasks/slice";

function Row(props: TaskType) {
  const { title, description, dueDate, id, completed } = props;
  const dispatch = useAppDispatch();

  const rowStyle = clsx({
    [styles.row]: true,
    [styles.completed]: completed,
  });

  const handleCheckboxChange = useCallback(
    (_: any, checked: boolean) => {
      dispatch(setCompleted({ id, completed: checked }));
    },
    [dispatch, id]
  );

  return (
    <TableRow className={rowStyle}>
      <TableCell>
        <Checkbox
          checked={completed}
          onChange={handleCheckboxChange}
          aria-label="Complete task"
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{new Date(dueDate).toLocaleDateString("en-GB")}</TableCell>
      <TableCell>
        <IconButton aria-label="Delete task">
          <DeleteIcon fontSize="medium" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default memo(Row);
