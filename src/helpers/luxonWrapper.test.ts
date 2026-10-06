import * as dateFns from "date-fns";

import * as luxon from "./luxonWrapper";

// Every day from 2019 to 2027: covers 53-week years and DST transitions.
const dates: Date[] = [];
for (let d = new Date(2019, 0, 1); d.getFullYear() < 2028; ) {
  dates.push(d);
  d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
}

const weekStartsOnValues = [0, 1, 2, 3, 4, 5, 6] as const;
const firstWeekContainsDateValues = [1, 4] as const;

describe.each(weekStartsOnValues)("when weekStartsOn is %s", (weekStartsOn) => {
  test("startOfWeek matches date-fns", () => {
    for (const date of dates) {
      expect(luxon.startOfWeek(date, { weekStartsOn })).toEqual(
        dateFns.startOfWeek(date, { weekStartsOn })
      );
    }
  });

  test("endOfWeek matches date-fns", () => {
    for (const date of dates) {
      expect(luxon.endOfWeek(date, { weekStartsOn })).toEqual(
        dateFns.endOfWeek(date, { weekStartsOn })
      );
    }
  });

  test.each(firstWeekContainsDateValues)(
    "getWeek matches date-fns when firstWeekContainsDate is %s",
    (firstWeekContainsDate) => {
      for (const date of dates) {
        expect(
          luxon.getWeek(date, { weekStartsOn, firstWeekContainsDate })
        ).toBe(dateFns.getWeek(date, { weekStartsOn, firstWeekContainsDate }));
      }
    }
  );
});

describe("when no options are passed", () => {
  test("weeks follow ISO 8601", () => {
    for (const date of dates) {
      expect(luxon.startOfWeek(date)).toEqual(dateFns.startOfISOWeek(date));
      expect(luxon.endOfWeek(date)).toEqual(dateFns.endOfISOWeek(date));
      expect(luxon.getWeek(date)).toBe(dateFns.getISOWeek(date));
    }
  });
});
