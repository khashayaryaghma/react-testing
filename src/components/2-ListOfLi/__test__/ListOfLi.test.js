import { screen, render } from "@testing-library/react";
import ListOfLi from "../ListOfLi";

describe("list rendering", () => {
  test('should render list of "li" tags', () => {
    render(<ListOfLi usernames={["john", "sam", "jasem", "tom"]} />);
    const liElements = screen.getAllByRole("listitem");
    expect(liElements.length).toEqual(4);
  });
});
