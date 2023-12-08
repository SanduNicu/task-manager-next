import "@testing-library/jest-dom";
import { getHeader, renderUI } from "./index.helper";
import TasksTable from "@/app/tasks/tasksTable";
import TaskDialog from "@/app/tasks/taskDialog";
import NoTasksInfo from "@/app/tasks/NoTasksInfo";
import * as selectors from "../../redux/features/tasks/selectors";
import { TaskType } from "@/app/types";

describe("Tasks", () => {
  it("should render header and TaskDialog (closed)", () => {
    renderUI();
    const header = getHeader();

    expect(header).toBeInTheDocument();
    expect(TaskDialog).toHaveBeenCalled();
  });

  it("should render NoTaskInfo if no table data", () => {
    renderUI();

    expect(TasksTable).not.toHaveBeenCalled();
    expect(NoTasksInfo).toHaveBeenCalled();
  });

  it("should render TaskTable if table data", () => {
    const mockedTasks = [{ title: "Task 1" } as TaskType];
    jest.spyOn(selectors, "tasksSelector").mockReturnValue(mockedTasks);
    renderUI();

    expect(TasksTable).toHaveBeenCalled();
  });
});
