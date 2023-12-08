import Tasks from "@/app/tasks";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

jest.mock("../../redux/features/tasks/selectors", () => ({
  tasksSelector: jest.fn().mockReturnValue([]),
}));

jest.mock("../../app/tasks/tasksTable", () =>
  jest.fn(() => <div>TasksTable</div>)
);

jest.mock("../../app/tasks/NoTasksInfo", () =>
  jest.fn(() => <div>NoTasksInfo</div>)
);

jest.mock("../../app/tasks/taskDialog", () =>
  jest.fn(() => <div>TaskDialog</div>)
);

export function renderUI() {
  render(<Tasks />);
}

export const getHeader = () => screen.getByRole("heading", { name: "Tasks" });
