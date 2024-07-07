import { screen, render } from "@testing-library/react";
import Text from "../Text";
test("the p element exists in the dom", () => {
  render(<Text />);
  const paraElement = screen.getByText("Welcome To APS");
  expect(paraElement).toBeInTheDocument();
});

test("the heading element should have text recieved from prop", () => {
  render(<Text headingText={"shahram shab pareh"} />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement.textContent).toBe("shahram shab pareh");
});
