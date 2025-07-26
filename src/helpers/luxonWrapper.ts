


import { DateTime } from 'luxon';

function toDateTime(date: Date | string): DateTime {
  return typeof date === 'string' ? DateTime.fromISO(date) : DateTime.fromJSDate(date);
}

export function addDays(date: Date | string, amount: number): Date {
  return toDateTime(date).plus({ days: amount }).toJSDate();
}

export function addMonths(date: Date | string, amount: number): Date {
  return toDateTime(date).plus({ months: amount }).toJSDate();
}

export function addWeeks(date: Date | string, amount: number): Date {
  return toDateTime(date).plus({ weeks: amount }).toJSDate();
}

export function addYears(date: Date | string, amount: number): Date {
  return toDateTime(date).plus({ years: amount }).toJSDate();
}

export function differenceInCalendarDays(dateLeft: Date | string, dateRight: Date | string): number {
  const d1 = toDateTime(dateLeft).startOf('day');
  const d2 = toDateTime(dateRight).startOf('day');
  return Math.floor(d1.diff(d2, 'days').days);
}

export function differenceInCalendarMonths(dateLeft: Date | string, dateRight: Date | string): number {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return (d1.year - d2.year) * 12 + (d1.month - d2.month);
}

export function eachMonthOfInterval(interval: { start: Date | string, end: Date | string }): Date[] {
  const start = toDateTime(interval.start).startOf('month');
  const end = toDateTime(interval.end).startOf('month');
  const months: Date[] = [];

  let current = start;
  while (current <= end) {
    months.push(current.toJSDate());
    current = current.plus({ months: 1 });
  }

  return months;
}

export function endOfISOWeek(date: Date | string): Date {
  return toDateTime(date).endOf('week').toJSDate(); // Luxon uses ISO week by default
}

export function endOfMonth(date: Date | string): Date {
  return toDateTime(date).endOf('month').toJSDate();
}

export function endOfWeek(date: Date | string): Date {
  return toDateTime(date).endOf('week').toJSDate();
}

export function endOfYear(date: Date | string): Date {
  return toDateTime(date).endOf('year').toJSDate();
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

export function getWeek(date: Date | string): number {
  return toDateTime(date).weekNumber;
}

export function getYear(date: Date | string): number {
  return toDateTime(date).year;
}

export function isAfter(date: Date | string, dateToCompare: Date | string): boolean {
  return toDateTime(date) > toDateTime(dateToCompare);
}

export function isBefore(date: Date | string, dateToCompare: Date | string): boolean {
  return toDateTime(date) < toDateTime(dateToCompare);
}

export function isDate(value: any): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}

export function isSameDay(dateLeft: Date | string, dateRight: Date | string): boolean {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return d1.hasSame(d2, 'day') && d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}

export function isSameMonth(dateLeft: Date | string, dateRight: Date | string): boolean {
  const d1 = toDateTime(dateLeft);
  const d2 = toDateTime(dateRight);
  return d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}

export function isSameYear(dateLeft: Date | string, dateRight: Date | string): boolean {
  return toDateTime(dateLeft).hasSame(toDateTime(dateRight), 'year');
}

export function max(dates: (Date | string)[]): Date {
  return dates.map(toDateTime).reduce((a, b) => (a > b ? a : b)).toJSDate();
}

export function min(dates: (Date | string)[]): Date {
  return dates.map(toDateTime).reduce((a, b) => (a < b ? a : b)).toJSDate();
}

export function setMonth(date: Date | string, month: number): Date {
  return toDateTime(date).set({ month: month + 1 }).toJSDate(); // month is 0-indexed in date-fns
}

export function setYear(date: Date | string, year: number): Date {
  return toDateTime(date).set({ year }).toJSDate();
}

export function startOfDay(date: Date | string): Date {
  return toDateTime(date).startOf('day').toJSDate();
}

export function startOfISOWeek(date: Date | string): Date {
  return toDateTime(date).startOf('week').toJSDate(); // ISO week by default
}

export function startOfMonth(date: Date | string): Date {
  return toDateTime(date).startOf('month').toJSDate();
}

export function startOfWeek(date: Date | string): Date {
  return toDateTime(date).startOf('week').toJSDate();
}

export function startOfYear(date: Date | string): Date {
  return toDateTime(date).startOf('year').toJSDate();
}

