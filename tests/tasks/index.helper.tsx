import Tasks from "@/app/tasks";
import { screen } from "@testing-library/react";
import * as selectors from "@/redux/features/tasks/selectors";
import { render } from "@testing-library/react";

// jest.spyOn(selectors, "taskSelector").mockReturnValue([] as any);

jest.mock("../../redux/features/tasks/selectors", () => ({
  tasksSelector: jest.fn().mockReturnValue([]),
}));

jest.mock("../../app/tasks/tasksTable", () =>
  jest.fn(() => <div>TasksTable</div>)
);

jest.mock("../../app/tasks/taskDialog", () =>
  jest.fn(() => <div>TaskDialog</div>)
);

jest.mock("next/navigation", () => {
  const actual = jest.requireActual("next/navigation");
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: (x: any) => x(),
}));

export function renderUI() {
  render(<Tasks />);
}

export const getHeader = () => screen.getByRole("heading", { name: "Tasks" });
