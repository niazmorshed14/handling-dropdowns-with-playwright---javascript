import {test, expect} from "@playwright/test";

test ("Handling Hidden Dropdowns", async ({page}) =>{

    /*
    there are some dropdown options which are hidden and we cannot get their locations easily
    we will user debugger option of selectorsHub to freeze the application for few seconds
    then we will capture the locations of the hidden items
    */

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(1000);

    await page.locator("//span[normalize-space()='PIM']").click();
    await page.waitForTimeout(1000);

    //clicking on the dropdown
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    await page.waitForTimeout(3000);

    /*
    at this point we need to use the selectorshub's debbuger option to freeze the application
    and then capture the locators
    */
   const allOptions = await page.$$('//div[@role="listbox"]//span'); //getting all the options with a common xpath for all options

   for (let option of allOptions) 
   {
        const value = await option.textContent();
        console.log(value); //printing all the options

        //selecting the option named "QA Engineer"
        if (value.includes("QA Engineer"))
        {
            await option.click();
            break; //using break statement since we no need to go to the next options

        };
        await page.waitForTimeout(4000);
   }

});