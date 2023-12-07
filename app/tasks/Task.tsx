import React, { memo } from "react";
import { TaskType } from "@/app/types";

function Task(props: TaskType) {
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  );
}

export default memo(Task);
