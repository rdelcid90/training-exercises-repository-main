const { test, expect } = require ('@playwright/test');
const { HPage }= require ('../pages/home.page');

test.beforeEach(async ({page})=> {

  await page.goto('https://demoblaze.com/');
  
});
test.describe('Log in Process',() => {
  

});

test('Sing in page and log in', async ({ page }) => {
  const homePage = new HomePage(page);
  
 
  await homePage.ClickOnSinginLick();
  await homePage.EnterUserNameSing();
  await homePage.EnterPasswordSing();
  await page.waitForTimeout(20000);
  await homePage.ClickOnCloseBtn();
  await page.waitForTimeout(5000);
  await homePage.ClickOnLoginLink();
  await homePage.EnterUserName(); 
  await homePage.EnterPassword();
  await page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();

})






