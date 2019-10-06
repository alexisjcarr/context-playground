import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ShoppingCart from ".";

describe("<ShoppingCart />", () => {
  let originalWarning, originalError;

  beforeEach(() => {
    originalWarning = console.warn;
    originalError = console.error;
    console.error = jest.fn();
    console.warn = jest.fn();
  });

  afterEach(() => {
    cleanup();

    console.warn = originalWarning;
    console.error = originalError;
  });

  it("matches snapshot", () => {
    expect(render(<ShoppingCart />)).toMatchSnapshot();
  });
});
