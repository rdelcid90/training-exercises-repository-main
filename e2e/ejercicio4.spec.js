const { test, expect } = require ('@playwright/test');
const { TabsPage } = require ('../pages/tabs.page');

test('Validate Tabs', async ({ page }) => {
    const tabsPage = new TabsPage(page);

 await page.goto('https://formy-project.herokuapp.com/switch-window');
 
    // Start waiting for new page before clicking. Note no await.
    const pagePromise = page.waitForEvent('popup');

    await tabsPage.CickOnSwitchBtn();
    const newPage = await pagePromise;
    // Interact with the new page normally.
    await newPage.waitForTimeout(5000);
    await newPage.locator('body > div > div > li:nth-child(5) > a').click();
   // await tabsPage.ClickOnAutocompleteBtn();
    await newPage.waitForTimeout(5000);
    // confirming that we are on the second page 
    console.log(newPage.url());
   

})


