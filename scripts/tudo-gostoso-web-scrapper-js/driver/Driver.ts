import { Builder } from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome";
import Firefox from "selenium-webdriver/firefox";

function getBuilder() {
    return new Builder();
}

export function getChromeService() {
    return new Chrome.ServiceBuilder("/usr/bin/chromedriver");
}

export function getFirefoxService() {
    return new Firefox.ServiceBuilder("/usr/bin/geckodriver");
}

export function getChromeOptions() {
    return new Chrome.Options(

    );
}

export function getFirefoxOptions() {
    return new Firefox.Options();
}

export async function getDriverChrome() {
    const builder = getBuilder();
    const browser = builder
        .forBrowser("chrome")
        .setChromeOptions(getChromeOptions())
        .setChromeService(getChromeService());
    const driver = await browser.build();

    return driver;
}

export async function getDriverFirefox() {
    const builder = getBuilder();
    const browser = builder
        .forBrowser("firefox")
        .setFirefoxOptions(getFirefoxOptions())
        .setFirefoxService(getFirefoxService());
    const driver = await browser.build();

    return driver;
}
