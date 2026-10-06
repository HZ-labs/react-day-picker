import React from "react";

import { DayPicker } from "react-day-picker";

// DayPicker formats dates with the Luxon default locale, set once by the app:
// `Settings.defaultLocale = "es"`.
export function Spanish() {
  return <DayPicker />;
}
