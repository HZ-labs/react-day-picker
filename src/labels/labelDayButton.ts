import { DateLib, type DateLibOptions } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelDayButton(
  date: Date,
  modifiers: Modifiers,
  options?: DateLibOptions,
  dateLib?: DateLib
) {
  let label = (dateLib ?? new DateLib(options)).format(date, "DDDD");
  if (modifiers.today) label = `Today, ${label}`;
  if (modifiers.selected) label = `${label}, selected`;
  return label;
}

/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */
export const labelDay = labelDayButton;
