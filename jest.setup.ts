import "@testing-library/jest-dom";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: (x: any) => x(),
}));

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
