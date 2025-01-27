const { test, expect } = require ('@playwright/test');
const { TabsPage } = require ('../pages/tabs.page');

test.beforeEach(async ({page})=> {

    await page.goto('https://formy-project.herokuapp.com/switch-window');
});
    test.describe('Work with two tabs',() => {
    

});


test('Validate Tabs', async ({ page }) => {
    const tabsPage = new TabsPage(page);

 
    // Loagin new Tab
    const pagePromise = page.waitForEvent('popup');
    
    // Click on Button that opens a new window 

    await tabsPage.CickOnSwitchBtn();
    const newPage = await pagePromise;
    

    // Interact with the new page normally.

    await newPage.waitForTimeout(5000);
    await newPage.locator('body > div > div > li:nth-child(5) > a').click();
    await tabsPage.ClickOnAutocompleteBtn();
    await newPage.waitForTimeout(5000);

    // confirming that we are on the second page 
     expect (newPage.locator('#autocomplete')).toBeVisible();
   

})


