import {test, expect} from '@playwright/test';

test ("Handling Multi Select Dropdown", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //select multiple options from multi select dropdown
    await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);
    await page.waitForTimeout(2000);

    //assertions of multi select dropdown
    //1. checking number of options in dropdown
    const options = await page.locator("#colors option");
    await expect(options).toHaveCount(5);

    //2. checkling particular option is present or not 
    const contents = await page.locator("#colors").textContent();
    await expect(contents.includes("Blue", "Green")).toBeTruthy();

});