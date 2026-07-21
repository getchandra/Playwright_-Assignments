import {test} from "@playwright/test"
test("Create Lead using CSS selectors",async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //fill Username
    await page.locator('#username').fill('democsr2')
   //fill Password
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
   //Click Login
    await page.locator('p~p input').nth(1).click()
    //Click CRM/SFA link
    await page.locator('a[href*="crmsfa"]').nth(1).click()
    await page.waitForTimeout(2000)
    //Click Lead Tab
    await page.locator('.x-panel-header > a[href*="leadsMain"]').click()
    //Click Create Lead
    await page.locator('a[href*="createLeadForm"]').click()
    //Fill the Company Name.
    await page.locator('input[name="companyName"]').fill('Cognizant')
    //Fill the First Name.
    await page.locator('input[name="firstName"]').nth(2).fill('Chandrasekhara')
    //Fill the Last Name.
    await page.locator('input[name="lastName"]').nth(2).fill('Varma') 
    //Fill the Salutation.
    await page.locator('input[name="personalTitle"]').fill('Mr.')   
    //Fill the Title.
    await page.locator('input[name="generalProfTitle"]').fill('Test Lead')
    //Fill the Annual Revenue.
    await page.locator('input[name="annualRevenue"]').fill('2000000')
    //Fill the Department.
    await page.locator('input[name="departmentName"]').fill('Quality Assurance')
    //Locate the Source dropdown using a CSS selector.
    await page.locator('select[name="dataSourceId"]').click()
    /* Locate the Source dropdown using a CSS selector.
    Iterate through all options in the Source dropdown.
    Print each dropdown value/text in the console.*/
    const sourceDropDown=page.locator('[name="dataSourceId"]>option') 
    const sourceDropDownValue=await sourceDropDown.count()
    console.log("the dropdown count is",sourceDropDownValue);
    for(let index=0;index<sourceDropDownValue;index++){
        console.log(await sourceDropDown.nth(index).innerText());
    }
    //Fill the Phone Number.
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9677198425')
    //Click the Create Lead button.
    await page.locator('.smallSubmit').click()   
})  