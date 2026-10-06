import { setLuxonLocale } from "@/test/luxonLocale";

import { formatMonthDropdown } from "./formatMonthDropdown";

const date = new Date(2022, 10, 21);

test("should return the formatted month dropdown label", () => {
  expect(formatMonthDropdown(date)).toEqual("November");
});

describe("when the Luxon locale is Spanish", () => {
  setLuxonLocale("es");
  test("should format using the locale", () => {
    expect(formatMonthDropdown(date)).toEqual("noviembre");
  });
});
