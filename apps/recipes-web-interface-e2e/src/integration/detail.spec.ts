import { getGreeting } from "../support/app.po";

describe("recipes-web-interface-detail", () => {
  beforeEach(() => cy.visit("/recipes/1"));

  it("should display the recipe name as Suco de Uva", () => {
    // Custom command example, see `../support/commands.ts` file
    // Function helper example, see `../support/app.po.ts` file
    cy.get("[id=recipe-name]").contains("Suco de Uva")
  });
});
