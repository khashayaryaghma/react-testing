import formatUserName from "./utils";

describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true);
  });

  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});

test("fomrat username with @", () => {
  expect(formatUserName("bani")).toBe("@bani");
});
