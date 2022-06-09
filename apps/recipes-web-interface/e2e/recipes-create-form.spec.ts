import test, { expect } from "@playwright/test"

test.describe("Form create recipe", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://localhost:3000/form")
    })
    test("the form should accept a recipe name", async ({page}) => {
        const formTextBox = await page.locator("#nameTextBox").first()
        await formTextBox.fill("A recipe name")
        await expect(formTextBox).toHaveValue("A recipe name")
    })
})
