import { cleanup } from "@testing-library/react";

let originalWarning, originalError;

export const afterEachHelper = () => {
  cleanup();

  console.warn = originalWarning;
  console.error = originalError;
};
