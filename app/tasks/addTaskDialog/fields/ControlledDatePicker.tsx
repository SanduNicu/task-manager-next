import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";

interface ControlledDatePickerProps {
  control: Control<any>;
}

export default function ControlledDatePicker(props: ControlledDatePickerProps) {
  const { control } = props;
  return (
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
  );
}
