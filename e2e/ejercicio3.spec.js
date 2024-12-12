const { test, expect } = require ('@playwright/test');
const { FormPage } = require('../pages/form.page');

test('Complete the information', async ({ page }) => {
    const formPage = new FormPage(page);
    

    await page.goto('https://formy-project.herokuapp.com/form');
    await formPage.Enterfirstname();
    await formPage.Enterlastname();
    await formPage.Enterjobtittle();
    await formPage.SelectEducation();
    await formPage.SelectGender();
    await formPage.SelectExperience();
    await page.waitForTimeout(5000);
    await page.locator('#datepicker').fill('data-date-today-highlight');
    await page.waitForTimeout(5000);

})
