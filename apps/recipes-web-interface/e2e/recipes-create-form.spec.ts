import test, { expect } from "@playwright/test";

test.describe("Form create recipe", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/form");
    });
    test("the form should accept a recipe name", async ({ page }) => {
        const formTextBox = page.locator("#txtRecipeName").first();
        await expect(formTextBox).toBeVisible();
        await formTextBox.fill("A recipe name");
        await expect(formTextBox).toHaveValue("A recipe name");
    });
    test("the form should accept a difficulty to be selected", async ({ page }) => {
        const selectDifficulty = page.locator("#selectRecipeDifficult").first();
        await expect(selectDifficulty).toBeVisible();
        await selectDifficulty.selectOption("easy");
        await expect(selectDifficulty).toHaveValue("easy");
    });
    test("the form should accept a serves adults value", async ({ page }) => {
        const numberServersAdults = page.locator("#numberPickerServesAdults");
        await expect(numberServersAdults).toBeVisible();
        await numberServersAdults.fill("5");
        await expect(numberServersAdults).toHaveValue("5");
    });
});
