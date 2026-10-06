import { DateTime } from "luxon";

import type {
  FirstWeekContainsDate,
  StartOfWeekOptions
} from "./luxon.types.js";

/** Default week settings: ISO weeks (start on Monday, week 1 contains Jan 4). */
const DEFAULT_WEEK_STARTS_ON = 1;
const DEFAULT_FIRST_WEEK_CONTAINS_DATE: FirstWeekContainsDate = 4;

/**
 * Dates go through their local calendar fields, not timestamps: Luxon rounds
 * historical offsets with seconds (e.g. local mean time before 1920) to
 * minutes, which would shift midnight by a few seconds.
 */
function toDateTime(date: Date | string): DateTime {
  if (typeof date === "string") return DateTime.fromISO(date);
  return DateTime.fromObject({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  });
}

function toNative(date: Date | string): Date {
  return typeof date === "string" ? toDate(DateTime.fromISO(date)) : date;
}

function toDate(dateTime: DateTime): Date {
  const date = new Date(0);
  date.setFullYear(dateTime.year, dateTime.month - 1, dateTime.day);
  date.setHours(
    dateTime.hour,
    dateTime.minute,
    dateTime.second,
    dateTime.millisecond
  );
  return date;
}

export function addDays(date: Date | string, amount: number): Date {
  return toDate(toDateTime(date).plus({ days: amount }));
}

export function addMonths(date: Date | string, amount: number): Date {
  return toDate(toDateTime(date).plus({ months: amount }));
}

export function addWeeks(date: Date | string, amount: number): Date {
  return toDate(toDateTime(date).plus({ weeks: amount }));
}

export function addYears(date: Date | string, amount: number): Date {
  return toDate(toDateTime(date).plus({ years: amount }));
}

export function differenceInCalendarDays(
  dateLeft: Date | string,
  dateRight: Date | string
): number {
  const d1 = toDateTime(dateLeft).startOf("day");
  const d2 = toDateTime(dateRight).startOf("day");
  return Math.floor(d1.diff(d2, "days").days);
}

export function differenceInCalendarMonths(
  dateLeft: Date | string,
  dateRight: Date | string
): number {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return (d1.year - d2.year) * 12 + (d1.month - d2.month);
}

export function eachMonthOfInterval(interval: {
  start: Date | string;
  end: Date | string;
}): Date[] {
  const start = toDateTime(interval.start).startOf("month");
  const end = toDateTime(interval.end).startOf("month");
  const months: Date[] = [];

  let current = start;
  while (current <= end) {
    months.push(toDate(current));
    current = current.plus({ months: 1 });
  }

  return months;
}

export function endOfISOWeek(date: Date | string): Date {
  return toDate(toDateTime(date).endOf("week")); // Luxon uses ISO week by default
}

export function endOfMonth(date: Date | string): Date {
  return toDate(toDateTime(date).endOf("month"));
}

export function endOfWeek(
  date: Date | string,
  options?: StartOfWeekOptions
): Date {
  return toDate(
    toDateTime(startOfWeek(date, options)).plus({ days: 6 }).endOf("day")
  );
}

export function endOfYear(date: Date | string): Date {
  return toDate(toDateTime(date).endOf("year"));
}

export function format(date: Date | string, formatStr: string): string {
  return toDateTime(date).toFormat(formatStr);
}

export function getISOWeek(date: Date | string): number {
  return toDateTime(date).weekNumber;
}

export function getMonth(date: Date | string): number {
  return toDateTime(date).month - 1; // like date-fns, returns 0-indexed
}

export function getWeek(
  date: Date | string,
  options?: StartOfWeekOptions & {
    firstWeekContainsDate?: FirstWeekContainsDate;
  }
): number {
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ?? DEFAULT_FIRST_WEEK_CONTAINS_DATE;
  const startOfWeekYear = (year: number) =>
    toDateTime(startOfWeek(new Date(year, 0, firstWeekContainsDate), options));

  const weekStart = toDateTime(startOfWeek(date, options));
  const year = toDateTime(date).year;
  let weekYearStart = startOfWeekYear(year + 1);
  if (weekStart < weekYearStart) {
    weekYearStart = startOfWeekYear(year);
    if (weekStart < weekYearStart) weekYearStart = startOfWeekYear(year - 1);
  }
  return Math.round(weekStart.diff(weekYearStart, "days").days / 7) + 1;
}

export function getYear(date: Date | string): number {
  return toDateTime(date).year;
}

export function isAfter(
  date: Date | string,
  dateToCompare: Date | string
): boolean {
  return toNative(date).getTime() > toNative(dateToCompare).getTime();
}

export function isBefore(
  date: Date | string,
  dateToCompare: Date | string
): boolean {
  return toNative(date).getTime() < toNative(dateToCompare).getTime();
}

export function isDate(value: any): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}

export function isSameDay(
  dateLeft: Date | string,
  dateRight: Date | string
): boolean {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return (
    d1.hasSame(d2, "day") && d1.hasSame(d2, "month") && d1.hasSame(d2, "year")
  );
}

export function isSameMonth(
  dateLeft: Date | string,
  dateRight: Date | string
): boolean {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return d1.hasSame(d2, "month") && d1.hasSame(d2, "year");
}

export function isSameYear(
  dateLeft: Date | string,
  dateRight: Date | string
): boolean {
  return toDateTime(dateLeft).hasSame(toDateTime(dateRight), "year");
}

export function max(dates: (Date | string)[]): Date {
  return new Date(Math.max(...dates.map((date) => toNative(date).getTime())));
}

export function min(dates: (Date | string)[]): Date {
  return new Date(Math.min(...dates.map((date) => toNative(date).getTime())));
}

export function setMonth(date: Date | string, month: number): Date {
  return toDate(toDateTime(date).set({ month: month + 1 })); // month is 0-indexed in date-fns
}

export function setYear(date: Date | string, year: number): Date {
  return toDate(toDateTime(date).set({ year }));
}

export function startOfDay(date: Date | string): Date {
  return toDate(toDateTime(date).startOf("day"));
}

export function startOfISOWeek(date: Date | string): Date {
  return toDate(toDateTime(date).startOf("week")); // ISO week by default
}

export function startOfMonth(date: Date | string): Date {
  return toDate(toDateTime(date).startOf("month"));
}

export function startOfWeek(
  date: Date | string,
  options?: StartOfWeekOptions
): Date {
  const weekStartsOn = options?.weekStartsOn ?? DEFAULT_WEEK_STARTS_ON;
  const day = toDateTime(date).startOf("day");
  // Luxon weekdays are 1 (Monday) to 7 (Sunday); `% 7` maps them to 0 (Sunday) to 6.
  const diff = ((day.weekday % 7) - weekStartsOn + 7) % 7;
  return toDate(day.minus({ days: diff }));
}

export function startOfYear(date: Date | string): Date {
  return toDate(toDateTime(date).startOf("year"));
}
