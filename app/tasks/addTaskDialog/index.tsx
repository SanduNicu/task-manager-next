import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddTaskForm from "./AddTaskForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface AddTaskDialogProps {
  isDialogOpen: boolean;
  handleClose: () => void;
}

export default function AddTaskDialog(props: AddTaskDialogProps) {
  const { handleClose, isDialogOpen } = props;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={isDialogOpen}
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
          <AddTaskForm handleClose={handleClose} />
        </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
}
