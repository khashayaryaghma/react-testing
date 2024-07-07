import { render, screen, fireEvent } from "@testing-library/react";
import TodoContainer from "../TodoContainer";

const addTodo = (todosArray) => {
  const inputElement = screen.getByPlaceholderText("write a todo");
  const formElement = screen.getByTestId("todo-form");

  todosArray.map((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.submit(formElement);
  });
};

describe("test Todo App", () => {
  test("should render a todo when i submit the form", () => {
    render(<TodoContainer />);
    const inputElement = screen.getByPlaceholderText("write a todo");
    const formElement = screen.getByTestId("todo-form");

    fireEvent.change(inputElement, { target: { value: "fix the bug" } });
    fireEvent.submit(formElement);

    const liElement = screen.getByText("fix the bug");
    expect(liElement).toBeInTheDocument();
  });

  test("should render multiple todos when i submit the form more than once", () => {
    render(<TodoContainer />);
    addTodo(["complete the homework", "study english", "daily scrum meeting"]);

    const liEmenets = screen.getAllByRole("listitem");
    expect(liEmenets.length).toBe(3);
  });
});
