const { test, expect } = require ('@playwright/test');
const { MainPage }= require ('../pages/main.page');
 

test.beforeEach(async ({page})=> {

    await page.goto('https://gh-users-search.netlify.app/');
});
test.describe('Search user testing',() => {
    

});

test('Loading the page', async ({ page }) => {
    const mainPage = new MainPage(page);
    let loc = page.locator('#root > main > section:nth-child(3) > section > article:nth-child(1) > div > h3');
    // Save the Roles value for default user
        var role = ( await page.locator('#root > main > section:nth-child(3) > section > article:nth-child(1) > div > h3').textContent());
        console.log("First user has:  " + role);

    // Enter the new user for making the verification 
        await mainPage.Enteruser();

    // Search the new user 
        await mainPage.ClickOnSearchBtn();
        await page.waitForTimeout(5000);

    // save the new Role value 
            var role2 =( await page.locator('#root > main > section:nth-child(3) > section > article:nth-child(1) > div > h3').textContent());
            console.log("Second user has:  " + role2);

                     if (role != role2){
                    console.log('Roles are different')
                         }else{
                            console.log('Roles are not different')
                            }
                            
    //Confirm the difference between values

        expect(role).not.toBe(role2);

    })
    