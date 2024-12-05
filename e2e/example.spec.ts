const { test, expect } = require ('@playwright/test');
const { HomePage }= require ('../pages/home.page');


test('Go to the Test page', async ({ page }) => {
  const homePage = new HomePage(page)
  await page.goto('https://demoblaze.com/');
  await homePage.ClickOnLoginLink();
  await homePage.EnterUserName(); 
  await homePage.EnterPassword();
  await page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

});






