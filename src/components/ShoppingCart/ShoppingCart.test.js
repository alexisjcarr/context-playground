import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { beforeEachHelper, afterEachHelper } from "../../utils";

import ShoppingCart from ".";

describe("<ShoppingCart />", () => {
  beforeEach(() => beforeEachHelper());
  afterEach(() => afterEachHelper());

  it("matches snapshot", () => {
    expect(render(<ShoppingCart />)).toMatchSnapshot();
  });
});
