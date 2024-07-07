import { render, screen } from "@testing-library/react";
import UserTable from "../UserTable";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("UserTable component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should render table of users", async () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ])
    );

    render(<UserTable />);
    const trElement = await screen.findAllByTestId("user-row");

    expect(trElement).toHaveLength(2); // Expect 2 rows in the table
    expect(trElement[0]).toHaveTextContent("John Doe");
    expect(trElement[1]).toHaveTextContent("Jane Smith");
  });
});

/*
beforeEach(() => {
  fetchMock.resetMocks();
});

    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "098-765-4321",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockUsers));

*/
