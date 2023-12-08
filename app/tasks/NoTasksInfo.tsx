import { Typography } from "@mui/material";
import React, { memo } from "react";

function NoTasksInfo() {
  const noTasksMessaage =
    "No tasks available. Please click + button to create a task.";

  return (
    <Typography
      variant="h5"
      gutterBottom
      sx={{ opacity: 0.5, textAlign: "center" }}
    >
      {noTasksMessaage}
    </Typography>
  );
}

export default memo(NoTasksInfo);
