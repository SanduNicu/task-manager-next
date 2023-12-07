"use client";

import React, { memo, useCallback } from "react";
import TasksTable from "./tasksTable";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import AddTaskDialog from "./addTaskDialog";

function Tasks() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleClickOpen = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  return (
    <div className={styles.tasks}>
      <header>
        <h1>Tasks</h1>
        <IconButton onClick={handleClickOpen} aria-label="Add Task">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </header>
      <TasksTable />
      <AddTaskDialog isDialogOpen={isDialogOpen} handleClose={handleClose} />
    </div>
  );
}

export default memo(Tasks);
