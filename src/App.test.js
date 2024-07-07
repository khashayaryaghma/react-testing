import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// 1
// test("it renders", () => {
//   render(<App />);
// });

// -------------------------------------------

//2
// describe("App component", () => {
//   test("it renders", () => {
//     render(<App />);

//     expect(screen.getByText("Users:")).toBeInTheDocument();
//   });
// });

// ------------------------------------------
// 3
// test("renders learn react link", () => {
//   render(<App />);

//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// ------------------------------------------
// 4
// import axios from "axios";
const data = [
  { username: "jasem" },
  { username: "hasem" },
  { username: "salem" },
];

global.fetch = jest.fn(() => {
  return new Promise.resolve({
    json: () => new Promise.resolve(data),
  });
});

describe("App component", () => {
  test("it displays a list of users", async () => {
    render(<App />);
    expect(screen.getByTestId("user-list")).toBeInTheDocument();
  });
});

// ------------------------------------------------------

// 4
// import { waitFor } from "@testing-library/react";
// import axios from "axios";

// jest.mock("axios");

// const fakeUsers = [
//   {
//     id: 1,
//     name: "Test User 1",
//     username: "testuser1",
//   },
//   {
//     id: 2,
//     name: "Test User 2",
//     username: "testuser2",
//   },
// ];

// describe("App component", () => {
//   test("it displays a list of users", async () => {
//     axios.get.mockResolvedValue({ data: fakeUsers });
//     render(<App />);

//     const userList = await waitFor(() => screen.getByTestId("user-list"));
//     expect(userList).toBeInTheDocument();
//   });
// });

// -----------------------------------------------
// 5

// describe("App component", () => {
//   test("it display bye world when i click on button", () => {
//     render(<App />);

//     const btnElement = screen.getByRole("button");
//     // fireEvent.click(btnElement);
//     const myEvent = createEvent.click(btnElement);
//     console.log(myEvent.timeStamp);
//     console.log(myEvent.cancelable);
//     console.dir(myEvent);

//     const heading = screen.getByRole("heading");
//     expect(heading.textContent).toBe("bye world");
//   });
// });
