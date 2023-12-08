import React, { memo } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";
import dayjs from "dayjs";

interface ControlledDatePickerProps {
  control: Control<any>;
}

const dateNotInThePast = (date: number | null) => {
  const yesterday = dayjs().add(-1, "day").valueOf();
  console.log(date);

  return date === null || date >= yesterday
    ? true
    : "Due date can not be in the past";
};

function ControlledDatePicker(props: ControlledDatePickerProps) {
  const { control } = props;

  return (
    <Controller
      control={control}
      name="dueDate"
      rules={{ validate: dateNotInThePast }}
      render={({ field, fieldState: { error } }) => {
        const dateValue = field.value ? dayjs(field.value) : null;

        return (
          <DatePicker
            disablePast
            label="Due date"
            format="DD/MM/YYYY"
            value={dateValue}
            inputRef={field.ref}
            onChange={(date) => {
              if (dayjs(date).isValid()) {
                field.onChange(dayjs(date).valueOf());
              }
            }}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        );
      }}
    />
  );
}

export default memo(ControlledDatePicker);
