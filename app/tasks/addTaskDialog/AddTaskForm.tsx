import { Box, Button } from "@mui/material";
import React, { memo, useCallback } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ControlledTextField from "./ControlledTextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch } from "@/redux/store";
import { addTask } from "@/redux/features/tasks/slice";
import { Inputs } from "./types";
import { defaultValues, parseTask } from "./utils";

interface AddTaskDialogProps {
  handleClose: () => void;
}

function AddTaskForm(props: AddTaskDialogProps) {
  const { handleClose } = props;
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      const newTask = parseTask(data);
      dispatch(addTask(newTask));
      handleClose();
    },
    [dispatch, handleClose]
  );
  return (
    <>
      <form>
        <Box display="flex" flexDirection="column" gap="1rem" width="30rem">
          <ControlledTextField
            name="title"
            label="Title"
            control={control}
            rules={{ required: { value: true, message: "Name equired!" } }}
          />
          <ControlledTextField
            name="description"
            label="Description"
            control={control}
            rules={{
              required: { value: true, message: "Description required!" },
            }}
          />
          <Controller
            control={control}
            name="dueDate"
            render={({ field }) => {
              return (
                <DatePicker
                  label="Due date"
                  format="DD/MM/YYYY"
                  value={field.value}
                  inputRef={field.ref}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                />
              );
            }}
          />
        </Box>
      </form>
      <Button sx={{ marginTop: "1rem" }} onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </>
  );
}

export default memo(AddTaskForm);
