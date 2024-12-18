const { test, expect } = require ('@playwright/test');
const { FormPage } = require('../pages/form.page');

test.beforeEach(async ({page})=> {

    await page.goto('https://formy-project.herokuapp.com/form');
});
test.describe('Search user testing',() => {
    

});

test('Complete the information', async ({ page }) => {
    const formPage = new FormPage(page);
    let URL = 'https://formy-project.herokuapp.com/thanks'

    // Complete TextBox fields
    await formPage.Enterfirstname();
    await formPage.Enterlastname();
    await formPage.Enterjobtittle();

    //Complete RadioButtons and Checkboxs fields
    await formPage.SelectEducation();
    await formPage.SelectGender();
    
    //Complete Dropdown fiel
    await formPage.SelectExperience();

    // Date picker
    await page.locator('#datepicker').fill('12/01/2024');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    //Complete Form by clicking Submit button
    await formPage.ClickSubmitButton();
    await page.waitForTimeout(5000);

    //Confirming new URL
    expect (page).toHaveURL(URL)
})

    
  
   