import { setLuxonLocale } from "@/test/luxonLocale";

import { labelWeekday } from "./labelWeekday";

const weekDay = new Date(2022, 10, 21);

test("should return the formatted weekday name", () => {
  expect(labelWeekday(weekDay)).toEqual("Monday");
});

describe("when the Luxon locale is Spanish", () => {
  setLuxonLocale("es");
  test("should format using the locale", () => {
    expect(labelWeekday(weekDay)).toEqual("lunes");
  });
});
