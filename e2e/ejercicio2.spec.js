const { test, expect } = require ('@playwright/test');
const { MainPage }= require ('../pages/main.page');



test('Loading the page', async ({ page }) => {
    const mainPage = new MainPage(page)

    await page.goto('https://gh-users-search.netlify.app/');
    await page.waitForTimeout(5000);
    await mainPage.Enteruser();
    await mainPage.ClickOnSearchBtn();
    await page.waitForTimeout(5000);

    
})
