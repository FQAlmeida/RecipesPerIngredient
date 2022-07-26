import { getGreeting } from "../support/app.po";

describe("recipes-web-interface-detail", () => {
  beforeEach(() => cy.visit("/recipes/1"));

  it("should display the recipe name and details", () => {
    const recipe = cy.get("[id=recipe-name]").should("be.visible").contains(/\w+/)
    recipe.get("[id=recipe-difficulty").should("be.visible").contains(/Difficulty: \w+/)
    recipe.get("[id=recipe-serves").should("be.visible").contains(/Serves: \d+/)
    recipe.get("[id=recipe-prep-time").should("be.visible").contains(/Preparation Time: \d+ \w+/)
  });
  it("should display the recipe image", () => {
    cy.get("[id=recipe-image]").should("be.visible")
  });
  it("should display the recipe ingredients", () => {
    const ingredients = cy.get("[id=recipe-ingredients-container]").should("be.visible")
    ingredients.get("[id=recipe-ingredients]").should("be.visible").contains("Ingredients")
  });
  it("should display the recipe tools", () => {
    const tools = cy.get("[id=recipe-tools-container]").should("be.visible")
    tools.get("[id=recipe-tools]").should("be.visible").contains("Tools")
  });
  it("should display the recipe steps", () => {
    const steps = cy.get("[id=recipe-steps-container]").should("be.visible")
    steps.get("[id=recipe-steps]").should("be.visible").contains("Steps")
  });
});
