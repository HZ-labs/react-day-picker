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
/** Default week settings: ISO weeks (start on Monday, week 1 contains Jan 4). */
const DEFAULT_WEEK_STARTS_ON = 1;
const DEFAULT_FIRST_WEEK_CONTAINS_DATE = 4;
/**
 * Dates go through their local calendar fields, not timestamps: Luxon rounds
 * historical offsets with seconds (e.g. local mean time before 1920) to
 * minutes, which would shift midnight by a few seconds.
 */
function toDateTime(date) {
    if (typeof date === "string")
        return luxon_1.DateTime.fromISO(date);
    return luxon_1.DateTime.fromObject({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        millisecond: date.getMilliseconds()
    });
}
function toNative(date) {
    return typeof date === "string" ? toDate(luxon_1.DateTime.fromISO(date)) : date;
}
function toDate(dateTime) {
    const date = new Date(0);
    date.setFullYear(dateTime.year, dateTime.month - 1, dateTime.day);
    date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
    return date;
}
function addDays(date, amount) {
    return toDate(toDateTime(date).plus({ days: amount }));
}
function addMonths(date, amount) {
    return toDate(toDateTime(date).plus({ months: amount }));
}
function addWeeks(date, amount) {
    return toDate(toDateTime(date).plus({ weeks: amount }));
}
function addYears(date, amount) {
    return toDate(toDateTime(date).plus({ years: amount }));
}
function differenceInCalendarDays(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft).startOf("day");
    const d2 = toDateTime(dateRight).startOf("day");
    return Math.floor(d1.diff(d2, "days").days);
}
function differenceInCalendarMonths(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return (d1.year - d2.year) * 12 + (d1.month - d2.month);
}
function eachMonthOfInterval(interval) {
    const start = toDateTime(interval.start).startOf("month");
    const end = toDateTime(interval.end).startOf("month");
    const months = [];
    let current = start;
    while (current <= end) {
        months.push(toDate(current));
        current = current.plus({ months: 1 });
    }
    return months;
}
function endOfISOWeek(date) {
    return toDate(toDateTime(date).endOf("week")); // Luxon uses ISO week by default
}
function endOfMonth(date) {
    return toDate(toDateTime(date).endOf("month"));
}
function endOfWeek(date, options) {
    return toDate(toDateTime(startOfWeek(date, options)).plus({ days: 6 }).endOf("day"));
}
function endOfYear(date) {
    return toDate(toDateTime(date).endOf("year"));
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
function getWeek(date, options) {
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? DEFAULT_FIRST_WEEK_CONTAINS_DATE;
    const startOfWeekYear = (year) => toDateTime(startOfWeek(new Date(year, 0, firstWeekContainsDate), options));
    const weekStart = toDateTime(startOfWeek(date, options));
    const year = toDateTime(date).year;
    let weekYearStart = startOfWeekYear(year + 1);
    if (weekStart < weekYearStart) {
        weekYearStart = startOfWeekYear(year);
        if (weekStart < weekYearStart)
            weekYearStart = startOfWeekYear(year - 1);
    }
    return Math.round(weekStart.diff(weekYearStart, "days").days / 7) + 1;
}
function getYear(date) {
    return toDateTime(date).year;
}
function isAfter(date, dateToCompare) {
    return toNative(date).getTime() > toNative(dateToCompare).getTime();
}
function isBefore(date, dateToCompare) {
    return toNative(date).getTime() < toNative(dateToCompare).getTime();
}
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
function isSameDay(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return (d1.hasSame(d2, "day") && d1.hasSame(d2, "month") && d1.hasSame(d2, "year"));
}
function isSameMonth(dateLeft, dateRight) {
    const d1 = toDateTime(dateLeft);
    const d2 = toDateTime(dateRight);
    return d1.hasSame(d2, "month") && d1.hasSame(d2, "year");
}
function isSameYear(dateLeft, dateRight) {
    return toDateTime(dateLeft).hasSame(toDateTime(dateRight), "year");
}
function max(dates) {
    return new Date(Math.max(...dates.map((date) => toNative(date).getTime())));
}
function min(dates) {
    return new Date(Math.min(...dates.map((date) => toNative(date).getTime())));
}
function setMonth(date, month) {
    return toDate(toDateTime(date).set({ month: month + 1 })); // month is 0-indexed in date-fns
}
function setYear(date, year) {
    return toDate(toDateTime(date).set({ year }));
}
function startOfDay(date) {
    return toDate(toDateTime(date).startOf("day"));
}
function startOfISOWeek(date) {
    return toDate(toDateTime(date).startOf("week")); // ISO week by default
}
function startOfMonth(date) {
    return toDate(toDateTime(date).startOf("month"));
}
function startOfWeek(date, options) {
    const weekStartsOn = options?.weekStartsOn ?? DEFAULT_WEEK_STARTS_ON;
    const day = toDateTime(date).startOf("day");
    // Luxon weekdays are 1 (Monday) to 7 (Sunday); `% 7` maps them to 0 (Sunday) to 6.
    const diff = ((day.weekday % 7) - weekStartsOn + 7) % 7;
    return toDate(day.minus({ days: diff }));
}
function startOfYear(date) {
    return toDate(toDateTime(date).startOf("year"));
}
//# sourceMappingURL=luxonWrapper.js.map