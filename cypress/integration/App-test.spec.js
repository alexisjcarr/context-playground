import React from "react";

describe("Complete e2e user flow test", () => {
  it("e2e", () => {
    cy.visit("/");

    /*=== Add item to cart test ===*/
    cy.contains("Add to cart").click();
    cy.contains("Cart").click();
    cy.contains("The Art Of War");

    /*=== Remove product from cart ===*/
    cy.contains("Remove from cart").click();
    cy.get("The Art of War").should("not.exist");
  });
});
