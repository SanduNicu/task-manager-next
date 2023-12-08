import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React, { memo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TaskForm from "./TaskForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { taskSelector } from "@/redux/features/tasks/selectors";

interface TaskDialogProps {
  handleClose: () => void;
}

function TaskDialog(props: TaskDialogProps) {
  const { handleClose } = props;
  const searchParams = useSearchParams();
  const taskSearchParam = searchParams.get("task");
  const taskId = taskSearchParam ? Number(taskSearchParam) : -1;
  const taskToEdit = useSelector(taskSelector(taskId));

  const isOpen = searchParams.has("new-task") || !!taskToEdit;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={!!isOpen}
      maxWidth="lg"
    >
      <DialogTitle id="dialog-title">Create Task</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TaskForm defaultValues={taskToEdit} handleClose={handleClose} />
        </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
}

export default memo(TaskDialog);
