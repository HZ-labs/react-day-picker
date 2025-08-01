"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelWeekNumber = labelWeekNumber;
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
function labelWeekNumber(weekNumber, options) {
    return `Week ${weekNumber}`;
}
//# sourceMappingURL=labelWeekNumber.js.map