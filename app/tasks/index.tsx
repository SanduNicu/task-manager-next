"use client";

import React, { memo, useCallback } from "react";
import TasksTable from "./tasksTable";
import styles from "./styles.module.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import TaskDialog from "./taskDialog";
import { useRouter } from "next/navigation";

function Tasks() {
  const router = useRouter();

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
      <TasksTable />
      <TaskDialog handleClose={handleClose} />
    </div>
  );
}

export default memo(Tasks);
