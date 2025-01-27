const { test, expect } = require ('@playwright/test');
const { MenuPage }= require ('../pages/menu.page');



test.beforeEach(async ({page})=> {

    await page.goto('https://elfsight.com/restaurant-menu-widget/iframe/#demo');
    //restaurantPage = new RestaurantPage( page );

});
    test.use({viewport:{width:1536,height:960}})
    test.describe('Working with frames',() => {
        
    });

    
    

        test('Shopping flow', async ({ page }) => {

   
            
            const frame = await page.frameLocator("iframe.application-demo-iframe");
            const iframeContainer = page.locator(".application-demo-container");
            const subFrame = await iframeContainer.frameLocator("iframe:nth-of-type(1)");
            await iframeContainer.scrollIntoViewIfNeeded();
            await iframeContainer.click();
            await page.waitForTimeout(3000);
            const pizza = await iframeContainer.frameLocator("TabsControlItem__Name-sc-1w5evbu-0").nth(0);
            await pizza.click();
           /*  const menuFrame = await iframeContainer.frameLocator("iframe:nth-of-type(1)");
            await menuFrame.locator(".TabsControlItem__Name-sc-1w5evbu-0").nth(0);
            const menuOptions = await menuFrame.locator('.TabsControlItem__Name-sc-1w5evbu-0').allTextContents();
            await menuFrame.locator(".TabsControlItem__Name-sc-1w5evbu-0").nth(1).click();
            expect(menuOptions).toEqual(this.mainMenu)
 */




            /* const pizza = subFrame.frameLocator('.TabsControlItem__Name-sc-1w5evbu-0.ggzOmI').textContent();
            console.log(await pizza);
 */



            

    });


      /*  
      await page.waitForTimeout(3000)
      const frame = page.frameLocator("iframe.application-demo-new-dashboard-iframe");
      const  iframeContainer = page.locator(".application-demo-new-dashboard-iframe-container");
      await  iframeContainer.click();
      const subFrame = await frame.frameLocator("iframe:nth-of-type(1)");
      const menuFrame = await subFrame.frameLocator("iframe:nth-of-type(1)");
      await menuFrame.locator(".TabsControlItem__Name-sc-1w5evbu-0");
      await page.waitForTimeout(3000);
      const menuOptions = await menuFrame.locator(".TabsControlItem__Name-sc-1w5evbu-0").allTextContents();
      console.log(menuOptions);
      await page.waitForTimeout(3000)
      await menuFrame.locator(".TabsControlItem__Name-sc-1w5evbu-0").nth(3).click();
      await page.waitForTimeout(3000) */
      





     /*  await page.locator("//div[@class='page-app-platform-demo-container']").scrollIntoViewIfNeeded();
      await page.waitForTimeout(3000);
      await iframeContainer.locator("//div[@class='TabsControlItem__Name-sc-1w5evbu-0 jpmzSK'][text()='Burgers']").click();
 */
         
           // await page.locator(".TabsControl__Component-sc-1w42595-0.jyMMqg > div").nth(1).click();
             
        

        
        // const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
        //     await iframe.locator("//a[text()='java.applet']").click()
    

        //  await page.locator("//div[@class='page-app-platform-demo-container']").scrollIntoViewIfNeeded();
        //  await page.waitForTimeout(3000)
        //  await page.locator("body > div.outer > div > header.header-main.header-bar-primary.header-bar > div > a > img").scrollIntoViewIfNeeded();
        //  await page.waitForTimeout(3000)
         
         
        // await page.locator("//div[@class='TabsControlItem__Name-sc-1w5evbu-0 jpmzSK'][text()='Burgers']").click();
        // // await page.keyboard.press('Enter');
        // // await page.keyboard.press('Enter');

        // await page.locator("#pricing > div > div.application-platform-pricing-table > div > div.application-platform-pricing-table-column-button > a").click();
        // await page.waitForTimeout(8000);
         //await iframe.locator("div[@class='TabsControlItem__Name-sc-1w5evbu-0 jpmzSK'][text()='Burgers']").click();
        

    
   
    
    