import { screen } from "@testing-library/react";
import { getHeader, renderUI } from "./index.helper";
import "@testing-library/jest-dom";
import TasksTable from "@/app/tasks/tasksTable";
import TaskDialog from "@/app/tasks/taskDialog";

describe("Tasks", () => {
  it("renders a heading", () => {
    renderUI();

    const header = getHeader();

    expect(header).toBeInTheDocument();
    expect(TasksTable).not.toHaveBeenCalled();
    expect(TaskDialog).toHaveBeenCalled();
  });
});
