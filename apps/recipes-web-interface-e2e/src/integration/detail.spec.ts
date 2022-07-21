import { getGreeting } from "../support/app.po";

describe("recipes-web-interface-detail", () => {
  beforeEach(() => cy.visit("/recipes/1"));

  it("should display the recipe name as Suco de Uva", () => {
    cy.get("[id=recipe-name]").contains(/\w+/)
  });
});
