import { configure } from "@testing-library/dom";
import "@testing-library/jest-dom";
import "html-validate/jest";
import { Settings } from "luxon";

import "./dateMatchers";

// Luxon formats with the system locale by default: make the tests independent of it.
Settings.defaultLocale = "en-US";

configure({
  getElementError: (message, container) => {
    const error = new Error(message as string | undefined);
    error.name = "TestingLibraryElementError";
    error.stack = undefined;
    return error;
  }
});
