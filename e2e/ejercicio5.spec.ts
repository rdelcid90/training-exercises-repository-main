import { test, expect } from '@playwright/test';
import { CasaPage,RestaurantPage } from "../pages/index";

test.describe( 'LAMBDATEST: SHOPPING CART TESTS', () =>{
  let CasaPage:CasaPage
  let restaurantPage:RestaurantPage

  test.beforeEach(async ({ page }) => {
    CasaPage = new CasaPage( page );
    restaurantPage = new RestaurantPage( page );
    await CasaPage.openURL('https://elfsight.com/restaurant-menu-widget/iframe/');
  });

  test('Shopping flow', async ({ page }) => {
    await page.waitForTimeout( 1000 );
    await restaurantPage.scrollToIframe();
    await page.waitForTimeout( 7000 );
    await restaurantPage.foodMenuIframe();
    await page.waitForTimeout( 7000 );
    
  });
})
