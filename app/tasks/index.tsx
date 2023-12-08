"use client";

import React, { memo, useCallback } from "react";
import TasksTable from "./tasksTable";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import TaskDialog from "./taskDialog";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { tasksSelector } from "@/redux/features/tasks/selectors";
import NoTasksInfo from "./NoTasksInfo";

function Tasks() {
  const router = useRouter();
  const tasks = useSelector(tasksSelector);
  const title = "Tasks";

  const handleClose = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleOpen = useCallback(() => {
    router.push(`/?new-task`);
  }, [router]);

  return (
    <div className={styles.tasks}>
      <header>
        <h1>{title}</h1>
        <IconButton onClick={handleOpen} aria-label="Add Task">
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>
      </header>

      {tasks.length ? <TasksTable /> : <NoTasksInfo />}
      <TaskDialog handleClose={handleClose} />
    </div>
  );
}

export default memo(Tasks);
