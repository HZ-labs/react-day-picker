import React from "react";

import { columnheader } from "@/test/elements";
import { setLuxonLocale } from "@/test/luxonLocale";
import { render } from "@/test/render";

import { SpanishWeekStartsOn } from "./SpanishWeekStartsOn";

setLuxonLocale("es");

test('should have "domingo" as first day of week', () => {
  render(<SpanishWeekStartsOn />);
  expect(columnheader("domingo")).toBeInTheDocument();
});
