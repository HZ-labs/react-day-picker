import { DateLib } from "../classes/DateLib.js";
/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `ccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatWeekdayName(weekday, options, dateLib) {
    return (dateLib ?? new DateLib(options)).format(weekday, "ccc").slice(0, 2);
}
//# sourceMappingURL=formatWeekdayName.js.map