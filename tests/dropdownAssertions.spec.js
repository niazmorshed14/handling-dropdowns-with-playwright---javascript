import {test, expect} from '@playwright/test';

test("Dropdown Assetions", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);

    //Assertions in Dropdown

    // 1. Checking total number of options in the dropdown - Approach 1

    const dropdownOptionsAssertion1 = await page.locator("#country option"); //this will return all the options in the dropdown
    await expect(dropdownOptionsAssertion1).toHaveCount(10); //validating
    await page.waitForTimeout(4000);

    // 1.1. Checking total number of options in the dropdown - Approach 2

    const drodownOptions = await page.$$("#country option"); //this will capture all the dropdown options in array format
    console.log ("Total number of options is: ", drodownOptions.length); //printing total number of options available
    await expect(drodownOptions.length).toBe(10); //validation

    // 2. Checking whether particular option is present on the dropdown list or not - Approac 1 - Calling direct function in playwright
    
    const allContents = await page.locator("#country").textContent(); //will return all the texts contained in the locator. So it will return all the options in string format
    await expect(allContents.includes('Japan')).toBeTruthy(); //checking whether UK is available in the list or not. It will provide true/false value
    await page.waitForTimeout(2000);

    // 2. Checking whether particular option is present on the dropdown list or not - Approac 2 - Using loop statement. 
    //This option is useful when there is no select tag available

    const allDropdownOptions = await page.$$("#country option");  //this will capture all the dropdown options in array format
    let status = false;

    for (const option of allDropdownOptions) {
        let value = await option.textContent();
        console.log (value); //printing all the options. it's not required but optional
        if (value.includes("Japan")){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

});