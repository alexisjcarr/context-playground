import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { beforeEachHelper, afterEachHelper } from "../../utils";

import App from ".";

describe("<App />", () => {
  beforeEach(() => beforeEachHelper());
  afterEach(() => afterEachHelper());

  it("matches snapshot", () => {
    expect(render(<App />)).toMatchSnapshot();
  });
});
