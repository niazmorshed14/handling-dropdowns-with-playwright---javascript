import {test, expect} from '@playwright/test'

test ("Handling Bootstrap Multi Select Dropdown", async({page}) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.waitForTimeout(2000);

    //assertion of total number of options
    await page.locator(".multiselect").click();
    await page.waitForTimeout(2000);

    const options_1 = await page.locator('ul>li label input'); //capture all the options
    await expect(options_1).toHaveCount(11);

    //selecting multiple options from the dropdown
    const options = await page.$$('ul>li label'); //return the options in array format
    for (let everyOptions of options){
        const value = await everyOptions.textContent(); //gets the text of the options
        console.log("the values are", value); //just printing the values

        if (value.includes("Java") || value.includes("Angular"))
        {
            await everyOptions.click(); //we are going to select Java and Angular from all the options
        }

    };
    await page.waitForTimeout(3000);



});