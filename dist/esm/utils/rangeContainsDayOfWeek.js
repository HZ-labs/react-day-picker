import { defaultDateLib } from "../classes/DateLib.js";
/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */
export function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
    const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    // iterate at maximum one week or the total days if the range is shorter than one week
    const totalDaysLimit = Math.min(totalDays, 6);
    for (let i = 0; i <= totalDaysLimit; i++) {
        if (dayOfWeekArr.includes(date.getDay())) {
            return true;
        }
        date = dateLib.addDays(date, 1);
    }
    return false;
}
//# sourceMappingURL=rangeContainsDayOfWeek.js.map