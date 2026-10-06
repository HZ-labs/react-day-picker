import { Settings } from "luxon";

/**
 * Sets the Luxon default locale for the tests in the current `describe` block,
 * the same way an app changes the language of DayPicker.
 */
export function setLuxonLocale(locale: string) {
  let previousLocale: string;
  beforeEach(() => {
    previousLocale = Settings.defaultLocale;
    Settings.defaultLocale = locale;
  });
  afterEach(() => {
    Settings.defaultLocale = previousLocale;
  });
}
