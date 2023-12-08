import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Inputs } from "../types";

interface ControlledTextField {
  label: string;
  name: "title" | "description";
  rules: any;
  control: Control<Inputs>;
}
export default function ControlledTextField(props: ControlledTextField) {
  const { control, label, name, rules } = props;
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            label={label}
            required
            {...field}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}
