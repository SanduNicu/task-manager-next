"use client";

import React, { memo, useCallback } from "react";
import TasksTable from "./tasksTable";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton, Typography } from "@mui/material";
import TaskDialog from "./taskDialog";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { tasksSelector } from "@/redux/features/tasks/selectors";

function Tasks() {
  const router = useRouter();
  const tasks = useSelector(tasksSelector);

  const handleClose = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleOpen = useCallback(() => {
    router.push(`/?new-task`);
  }, [router]);

  return (
    <div className={styles.tasks}>
      <header>
        <h1>Tasks</h1>
        <IconButton onClick={handleOpen} aria-label="Add Task">
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>
      </header>
      {tasks.length ? (
        <TasksTable />
      ) : (
        <Typography
          variant="h5"
          gutterBottom
          sx={{ opacity: 0.5, textAlign: "center" }}
        >
          No tasks available. Please click + button to create a task.
        </Typography>
      )}
      <TaskDialog handleClose={handleClose} />
    </div>
  );
}

export default memo(Tasks);
