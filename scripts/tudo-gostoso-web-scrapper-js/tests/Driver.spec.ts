import { WebDriver } from "selenium-webdriver";
import { getDriverFirefox } from "../driver/Driver";

describe("Driver module", () => {
    test("Driver has type WebDriver", async () => {
        const driver = await getDriverFirefox();
        await driver.get("https://tudogostoso.com.br/receitas")
        const title = await driver.getTitle();
        expect(title).not.toHaveLength(0);
        expect(driver).toBeInstanceOf(WebDriver);
        await driver.close();
    });
});
