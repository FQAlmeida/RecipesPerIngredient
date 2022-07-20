describe("recipes-web-interface-principal", () => {
  beforeEach(() => cy.visit("/"));

  it("There must be at least one input for ingredients", () => {
    // Custom command example, see `../support/commands.ts` file
    // Function helper example, see `../support/app.po.ts` file
    cy.get("[id=inputs-container]").find("input").should("have.length.gte", 0)
  });
});
