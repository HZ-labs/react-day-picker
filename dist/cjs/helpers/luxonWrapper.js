"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addWeeks = addWeeks;
exports.addYears = addYears;
exports.differenceInCalendarDays = differenceInCalendarDays;
exports.differenceInCalendarMonths = differenceInCalendarMonths;
exports.eachMonthOfInterval = eachMonthOfInterval;
exports.endOfISOWeek = endOfISOWeek;
exports.endOfMonth = endOfMonth;
exports.endOfWeek = endOfWeek;
exports.endOfYear = endOfYear;
exports.format = format;
exports.getISOWeek = getISOWeek;
exports.getMonth = getMonth;
exports.getWeek = getWeek;
exports.getYear = getYear;
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isDate = isDate;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isSameYear = isSameYear;
exports.max = max;
exports.min = min;
exports.setMonth = setMonth;
exports.setYear = setYear;
exports.startOfDay = startOfDay;
exports.startOfISOWeek = startOfISOWeek;
exports.startOfMonth = startOfMonth;
exports.startOfWeek = startOfWeek;
exports.startOfYear = startOfYear;
const luxon_1 = require("luxon");
function toDateTime(date) {
    return typeof date === 'string' ? luxon_1.DateTime.fromISO(date) : luxon_1.DateTime.fromJSDate(date);
}
function addDays(date, amount) {
    return toDateTime(date).plus({ days: amount }).toJSDate();
}
function addMonths(date, amount) {
    return toDateTime(date).plus({ months: amount }).toJSDate();
}
function addWeeks(date, amount) {
    return toDateTime(date).plus({ weeks: amount }).toJSDate();
}
function addYears(date, amount) {
    return toDateTime(date).plus({ years: amount }).toJSDate();
}
function differenceInCalendarDays(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft).startOf('day');
    const d2 = toDateTime(dateRight).startOf('day');
    return Math.floor(d1.diff(d2, 'days').days);
}
function differenceInCalendarMonths(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return (d1.year - d2.year) * 12 + (d1.month - d2.month);
}
function eachMonthOfInterval(interval) {
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
function endOfISOWeek(date) {
    return toDateTime(date).endOf('week').toJSDate(); // Luxon uses ISO week by default
}
function endOfMonth(date) {
    return toDateTime(date).endOf('month').toJSDate();
}
function endOfWeek(date) {
    return toDateTime(date).endOf('week').toJSDate();
}
function endOfYear(date) {
    return toDateTime(date).endOf('year').toJSDate();
}
function format(date, formatStr) {
    return toDateTime(date).toFormat(formatStr);
}
function getISOWeek(date) {
    return toDateTime(date).weekNumber;
}
function getMonth(date) {
    return toDateTime(date).month - 1; // like date-fns, returns 0-indexed
}
function getWeek(date) {
    return toDateTime(date).weekNumber;
}
function getYear(date) {
    return toDateTime(date).year;
}
function isAfter(date, dateToCompare) {
    return toDateTime(date) > toDateTime(dateToCompare);
}
function isBefore(date, dateToCompare) {
    return toDateTime(date) < toDateTime(dateToCompare);
}
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
function isSameDay(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return d1.hasSame(d2, 'day') && d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}
function isSameMonth(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return d1.hasSame(d2, 'month') && d1.hasSame(d2, 'year');
}
function isSameYear(dateLeft, dateRight) {
    return toDateTime(dateLeft).hasSame(toDateTime(dateRight), 'year');
}
function max(dates) {
    return dates.map(toDateTime).reduce((a, b) => (a > b ? a : b)).toJSDate();
}
function min(dates) {
    return dates.map(toDateTime).reduce((a, b) => (a < b ? a : b)).toJSDate();
}
function setMonth(date, month) {
    return toDateTime(date).set({ month: month + 1 }).toJSDate(); // month is 0-indexed in date-fns
}
function setYear(date, year) {
    return toDateTime(date).set({ year }).toJSDate();
}
function startOfDay(date) {
    return toDateTime(date).startOf('day').toJSDate();
}
function startOfISOWeek(date) {
    return toDateTime(date).startOf('week').toJSDate(); // ISO week by default
}
function startOfMonth(date) {
    return toDateTime(date).startOf('month').toJSDate();
}
function startOfWeek(date) {
    return toDateTime(date).startOf('week').toJSDate();
}
function startOfYear(date) {
    return toDateTime(date).startOf('year').toJSDate();
}
//# sourceMappingURL=luxonWrapper.js.map