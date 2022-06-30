import { By, WebDriver } from "selenium-webdriver";
import { getDriverFirefox } from "../driver/Driver";

describe("Initial Screen Scrapping", () => {
    let driver: WebDriver;
    beforeAll(async () => {
        driver = await getDriverFirefox();
        // close-hit
        await driver.get("https://tudogostoso.com.br/receitas");
        try {

            const closeAdBtn = await driver.findElement(By.className("close-hit"));
            if(await closeAdBtn.isDisplayed()){
                await closeAdBtn.click();
            }
        } catch { }

    });
    test("Screen Title should be Todas as receitas do TudoGostoso", async () => {
        const title = await driver.getTitle();
        expect(title).toBe("Todas as receitas do TudoGostoso");
    });
    afterAll(async () => {
        await driver.close();
    });
});

// https://www.tudogostoso.com.br/receita/316928-risoto-de-alcatra-suina-com-maca-verde-e-limao-siciliano.html
// .recipe-card