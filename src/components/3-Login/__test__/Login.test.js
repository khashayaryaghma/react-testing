import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../Login";

describe("login functionality", () => {
  test("should render a button", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("should show login text as initial value", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.textContent).toBe("login");
  });

  test("should show logout text when i click on button", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement.textContent).toBe("logout");
  });
});
