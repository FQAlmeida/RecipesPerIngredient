import { By } from "selenium-webdriver";
import { getDriverFirefox } from "../driver/Driver";

(
    async function () {
        const firstPage = 1;
        const driver = await getDriverFirefox();
        await driver.get("https://tudogostoso.com.br/receitas");
        const lastPage = await driver.findElement(By.linkText(">>")).getAttribute("href");
        console.log(firstPage, new URL(lastPage).searchParams.get("page"));
        
        await driver.close();
    }
)();