import { setLuxonLocale } from "@/test/luxonLocale";

import { formatWeekdayName } from "./formatWeekdayName";

const date = new Date(2022, 10, 21);

test("should return the formatted weekday name", () => {
  expect(formatWeekdayName(date)).toEqual("Mo");
});

describe("when the Luxon locale is Spanish", () => {
  setLuxonLocale("es");
  test("should format using the locale", () => {
    expect(formatWeekdayName(date)).toEqual("lu");
  });
});
