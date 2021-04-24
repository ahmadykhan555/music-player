import "@testing-library/jest-dom/extend-expect";
import { screen, render, cleanup } from "@testing-library/react";
import AppLoader from "../components/AppLoader/AppLoader";

afterEach(() => cleanup());

test("should render app loader", () => {
  render(<AppLoader />);
  const el = screen.getByTestId("app-loader");
  expect(el).toBeInTheDocument();
});

test("should render app loader with custom label", () => {
  render(<AppLoader loaderText='hello from test' />);
  const el = screen.getByTestId("app-loader");
  expect(el).toHaveTextContent("hello from test");
});
