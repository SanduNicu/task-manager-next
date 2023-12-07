import React, { memo } from "react";
import TasksTable from "./tasksTable";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <h1>Tasks</h1>
        <IconButton aria-label="Add Task">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </header>

      <TasksTable />
    </div>
  );
}

export default memo(Tasks);
