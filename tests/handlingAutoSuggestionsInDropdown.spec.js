import {test, expect} from "@playwright/test";

test ("Handling Auto Suggest / Complete Dropdown", async ({page}) => {
    await page.goto("https://www.redbus.in/");
    await page.waitForTimeout(2000);
    
    await page.locator("#src").fill("Delhi");
    await page.waitForTimeout(3000);
    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI jTMXri')]/div/text[1]"); //waiting for the auto suggestions to load

    const allTheOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI jTMXri')]/div/text[1]"); //capturing all the options in a variable

    for (let option of allTheOptions)
    {
       const textValue = await option.textContent(); //gettig all the text values of the options
       console.log(textValue); //printing the value

       //selecting a value from the suggested options
       if (textValue.includes("Azadpur"))
       {
        await option.click();
        break;
       };

    };
    await page.waitForTimeout(5000);


});