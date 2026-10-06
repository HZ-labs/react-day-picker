import { setLuxonLocale } from "@/test/luxonLocale";

import { defaultLocale, DateLib } from "../classes/DateLib.js";

import { formatCaption } from "./formatCaption";

const date = new Date(2022, 10, 21);

test("should return the formatted caption", () => {
  expect(
    formatCaption(date, {}, new DateLib({ locale: defaultLocale }))
  ).toEqual("November 2022");
});

describe("when the Luxon locale is Spanish", () => {
  setLuxonLocale("es");
  test("should format using the locale", () => {
    expect(formatCaption(date)).toEqual("noviembre 2022");
  });
});
