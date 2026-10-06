import React from "react";

import { render, screen } from "@/test/render";

import { WeeknumberCustom } from "./WeeknumberCustom";

beforeEach(() => {
  render(<WeeknumberCustom />);
});

test("should display ISO week numbers (week 53 at the end of 2020)", () => {
  expect(screen.getByRole("rowheader", { name: "W53" })).toBeInTheDocument();
  expect(
    screen.queryByRole("rowheader", { name: "W1" })
  ).not.toBeInTheDocument();
});
