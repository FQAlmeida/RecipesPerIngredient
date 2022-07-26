describe("recipes-web-interface-principal", () => {
  beforeEach(() => cy.visit("/"));

  it("There must be one input for ingredients", () => {
    cy.get("[id=inputs-container]").find("input").should("have.length", 1)
  });
  it("There must be two inputs for ingredients after click on add input button", () => {
    const add_button = cy.get("[id=add-input]")
    add_button.click()
    cy.get("[id=inputs-container]").find("input").should("have.length", 2)
  });
  it("There must be one input for ingredients after click on add input button and then clicking on delete for the first one", () => {
    const add_button = cy.get("[id=add-input]")
    add_button.click()
    const inputs_container = cy.get("[id=inputs-container]").find("input")
    inputs_container.should("have.length", 2)
    const first_input = inputs_container.get("[data-cy=ingredient-input-1]")
    const first_input_delete = first_input.get("[data-cy=delete-button-1]")
    first_input_delete.click()
    cy.get("[id=inputs-container]").find("input").should("have.length", 1)
  });
});
