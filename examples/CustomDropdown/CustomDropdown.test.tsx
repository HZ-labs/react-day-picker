import React from "react";

import { render } from "@testing-library/react";

import { grid, monthDropdown, yearDropdown } from "@/test/elements";
import { user } from "@/test/user";

import { CustomDropdown } from "./CustomDropdown";

const today = new Date(2015, 6, 1);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<CustomDropdown />);
});

test("should display the month dropdown", () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test("should display the year dropdown", () => {
  expect(yearDropdown()).toBeInTheDocument();
});

test("change month", async () => {
  expect(grid()).toHaveAccessibleName("July 2015");

  await user.selectOptions(yearDropdown(), "2000");
  await user.selectOptions(monthDropdown(), "December");

  expect(grid()).toHaveAccessibleName("December 2000");
});
