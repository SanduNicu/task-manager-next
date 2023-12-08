import React, { memo, useCallback } from "react";
import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";
import { TaskType } from "@/app/types";
import clsx from "clsx";
import { useAppDispatch } from "@/redux/store";
import { deleteTask, setCompleted } from "@/redux/features/tasks/slice";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

function Row(props: TaskType) {
  const { title, description, dueDate, id, completed } = props;
  const router = useRouter();

  const dispatch = useAppDispatch();
  const validDueDate = dueDate
    ? new Date(dueDate).toLocaleDateString("en-GB")
    : "";

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

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(id));
  }, [id, dispatch]);

  const openTask = useCallback(() => {
    router.push(`/?task=${id}`);
  }, [router, id]);

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
      <TableCell>{validDueDate}</TableCell>
      <TableCell>
        <IconButton onClick={openTask} aria-label="Edit task">
          <EditIcon color="info" fontSize="medium" />
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="Delete task">
          <DeleteIcon color="error" fontSize="medium" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default memo(Row);
