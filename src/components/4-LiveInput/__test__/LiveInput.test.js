import { screen, render, fireEvent } from "@testing-library/react";
import LiveInput from "../LiveInput";

describe("live input", () => {
  describe("should render input and h2", () => {
    test("input element", () => {
      render(<LiveInput />);
      const inputElement = screen.getByPlaceholderText("Enter a text");
      expect(inputElement).toBeInTheDocument();
    });
    test("h2 element", () => {
      render(<LiveInput />);
      const headingElement = screen.getByRole("heading");
      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("onChange event", () => {
    test("input should have entered value in that input", () => {
      render(<LiveInput />);
      const inputElement = screen.getByPlaceholderText("Enter a text");
      const headingElement = screen.getByRole("heading");

      fireEvent.change(inputElement, { target: { value: "hello world" } });
      expect(headingElement.textContent).toBe("hello world");
    });
  });
});
