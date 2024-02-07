import {test, expect} from '@playwright/test';
import { stat } from 'fs';

test("Handling Dropdown", async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //there are multiple ways to select an option from the dropdown

    //way 1: using label as locator
    
    const dropDownButton1 = await page.locator("#country"); //getting the locator of the dropdown button
    await dropDownButton1.click();
    await page.waitForTimeout(2000);
    await dropDownButton1.selectOption({label: 'Japan'}); //selecting a value from the dropdown list
    await page.waitForTimeout(5000);

    //way 2: using plain text as locator
    
    const dropDownButton2 = await page.locator("#country"); //getting the locator of the dropdown button
    await dropDownButton2.click();
    await page.waitForTimeout(2000);
    await dropDownButton2.selectOption('Japan'); //selecting a value from the dropdown list
    await page.waitForTimeout(5000);


    //way 3: using value as locator. value is an attribute of the option element

    const dropDownButton3 = await page.locator("#country"); //getting the locator of the dropdown button
    await dropDownButton3.click();
    await page.waitForTimeout(2000);
    await dropDownButton3.selectOption({value: "uk"}); //selecting a value from the dropdown list
    await page.waitForTimeout(5000);


    //way 4: by using index


    const dropDownButton4 = await page.locator("#country"); //getting the locator of the dropdown button
    await dropDownButton4.click();
    await page.waitForTimeout(2000);
    await dropDownButton4.selectOption({index: 1}); //selecting a value from the dropdown list. index starts from 0
    await page.waitForTimeout(5000);


    //way 5: calling selectOption method directly 


    await page.selectOption("#country", "Japan"); //first parameter is the locator, second parameter is the option value
    await page.waitForTimeout(5000); 


    //way 6: using the looping statement
    
    const drodownOptions = await page.$$("#country option");//this will capture all the dropdown options in array format

    for (const option of drodownOptions) {
        let value = await option.textContent();
        console.log (value); //printing all the options. it's not required but optional
        if (value.includes("Japan")){
            await page.selectOption("#country", value);
            break;
        }
    }
    await page.waitForTimeout(2000);

    

});