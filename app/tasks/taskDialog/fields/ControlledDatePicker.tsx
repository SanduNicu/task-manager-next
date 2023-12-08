import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";
import dayjs from "dayjs";

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
        const dateValue = field.value ? dayjs(field.value) : null;
        return (
          <DatePicker
            label="Due date"
            format="DD/MM/YYYY"
            value={dateValue}
            inputRef={field.ref}
            onChange={(date) => {
              field.onChange(dayjs(date).valueOf());
            }}
          />
        );
      }}
    />
  );
}
