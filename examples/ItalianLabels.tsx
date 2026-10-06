import React from "react";

import { DateTime } from "luxon";
import { DayPicker } from "react-day-picker";

// DayPicker formats dates with the Luxon default locale, set once by the app:
// `Settings.defaultLocale = "it"`.
// The labels are not translated by Luxon and must be passed to DayPicker.
export function ItalianLabels() {
  return (
    <DayPicker
      labels={{
        labelDayButton: (date, { today, selected }) => {
          let label = DateTime.fromJSDate(date).toFormat("DDDD");
          if (today) label = `Oggi, ${label}`;
          if (selected) label = `${label}, selezionato`;
          return label;
        },
        labelWeekNumber: (weekNumber) => `Settimana ${weekNumber}`,
        labelNext: () => "Prossimo mese",
        labelPrevious: () => "Mese precedente",
        labelMonthDropdown: () => "Seleziona il mese",
        labelYearDropdown: () => "Seleziona l'anno"
      }}
    />
  );
}
