import { DateTime } from 'luxon';
function toDateTime(date) {
    return typeof date === 'string' ? DateTime.fromISO(date) : DateTime.fromJSDate(date);
}
export function addDays(date, amount) {
    return toDateTime(date).plus({ days: amount }).toJSDate();
}
export function addMonths(date, amount) {
    return toDateTime(date).plus({ months: amount }).toJSDate();
}
export function addWeeks(date, amount) {
    return toDateTime(date).plus({ weeks: amount }).toJSDate();
}
export function addYears(date, amount) {
    return toDateTime(date).plus({ years: amount }).toJSDate();
}
export function differenceInCalendarDays(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft).startOf('day');
    const d2 = toDateTime(dateRight).startOf('day');
    return Math.floor(d1.diff(d2, 'days').days);
}
export function differenceInCalendarMonths(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return (d1.year - d2.year) * 12 + (d1.month - d2.month);
}
export function eachMonthOfInterval(interval) {
    const start = toDateTime(interval.start).startOf('month');
    const end = toDateTime(interval.end).startOf('month');
    const months = [];
    let current = start;
    while (current <= end) {
        months.push(current.toJSDate());
        current = current.plus({ months: 1 });
    }
    return months;
}
export function endOfISOWeek(date) {
    return toDateTime(date).endOf('week').toJSDate(); // Luxon uses ISO week by default
}
export function endOfMonth(date) {
    return toDateTime(date).endOf('month').toJSDate();
}
export function endOfWeek(date) {
    return toDateTime(date).endOf('week').toJSDate();
}
export function endOfYear(date) {
    return toDateTime(date).endOf('year').toJSDate();
}
export function format(date, formatStr) {
    return toDateTime(date).toFormat(formatStr);
}
export function getISOWeek(date) {
    return toDateTime(date).weekNumber;
}
export function getMonth(date) {
    return toDateTime(date).month - 1; // like date-fns, returns 0-indexed
}
export function getWeek(date) {
    return toDateTime(date).weekNumber;
}
export function getYear(date) {
    return toDateTime(date).year;
}
export function isAfter(date, dateToCompare) {
    return toDateTime(date) > toDateTime(dateToCompare);
}
export function isBefore(date, dateToCompare) {
    return toDateTime(date) < toDateTime(dateToCompare);
}
export function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
export function isSameDay(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return d1.hasSame(d2, 'day') && d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}
export function isSameMonth(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}
export function isSameYear(dateLeft, dateRight) {
    return toDateTime(dateLeft).hasSame(toDateTime(dateRight), 'year');
}
export function max(dates) {
    return dates.map(toDateTime).reduce((a, b) => (a > b ? a : b)).toJSDate();
}
export function min(dates) {
    return dates.map(toDateTime).reduce((a, b) => (a < b ? a : b)).toJSDate();
}
export function setMonth(date, month) {
    return toDateTime(date).set({ month: month + 1 }).toJSDate(); // month is 0-indexed in date-fns
}
export function setYear(date, year) {
    return toDateTime(date).set({ year }).toJSDate();
}
export function startOfDay(date) {
    return toDateTime(date).startOf('day').toJSDate();
}
export function startOfISOWeek(date) {
    return toDateTime(date).startOf('week').toJSDate(); // ISO week by default
}
export function startOfMonth(date) {
    return toDateTime(date).startOf('month').toJSDate();
}
export function startOfWeek(date) {
    return toDateTime(date).startOf('week').toJSDate();
}
export function startOfYear(date) {
    return toDateTime(date).startOf('year').toJSDate();
}
//# sourceMappingURL=luxonWrapper.js.map