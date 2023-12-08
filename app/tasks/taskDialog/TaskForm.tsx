import { Box, Button } from "@mui/material";
import React, { memo, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ControlledTextField from "./fields/ControlledTextField";
import { useAppDispatch } from "@/redux/store";
import { addTask } from "@/redux/features/tasks/slice";
import { Inputs } from "./types";
import { initialValues, parseTask } from "./utils";
import ControlledDatePicker from "./fields/ControlledDatePicker";
import { TaskType } from "@/app/types";

interface AddTaskDialogProps {
  handleClose: () => void;
  defaultValues: TaskType | undefined;
}

function TaskForm(props: AddTaskDialogProps) {
  const { handleClose, defaultValues } = props;
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: { ...initialValues, ...defaultValues },
  });

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
          <ControlledDatePicker control={control} />
        </Box>
      </form>
      <Button sx={{ marginTop: "1rem" }} onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </>
  );
}

export default memo(TaskForm);
