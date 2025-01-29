import { type Locator, type FrameLocator, type Page, expect } from "@playwright/test";
import Methods from "./methods.page";

export class RestaurantPage extends Methods {
    
    readonly page:Page;
    readonly frame:FrameLocator;
    subFrame:FrameLocator;
    menuFrame:FrameLocator;
    readonly menu:Locator;
    readonly iframeContainer:Locator;

    mainMenu = [
        'Pizza', 'Burgers', 'Snacks & Sides', 'Salads', 'Drinks'
    ];

    constructor(page:Page) {
        super(page);
        this.page = page;
        this.frame = page.frameLocator('iframe.application-demo-iframe');
        this.iframeContainer = page.locator('.application-demo-container');
    }

    async getSubFrame(){
        this.subFrame = await this.frame.frameLocator('iframe:nth-of-type(1)');
        return this.subFrame;
    }
    async getMenuFrame(){
        this.subFrame = await this.frame.frameLocator('iframe:nth-of-type(1)');
        this.menuFrame = await this.subFrame.frameLocator('iframe:nth-of-type(1)');
        return this.menuFrame;
    }
    async scrollToIframe(){
        await this.iframeContainer.scrollIntoViewIfNeeded();
        await this.iframeContainer.click(); // necessary to activate the iframe
    }
    async foodMenuIframe(){
        const menuFrame = await this.getMenuFrame();
        await menuFrame.locator('.TabsControlItem__Name-sc-1w5evbu-0').nth(0).waitFor({ state:"attached", timeout:3000 });
        const menuOptions = await menuFrame.locator('.TabsControlItem__Name-sc-1w5evbu-0').allTextContents();
        console.log(menuOptions);
        await menuFrame.locator('.TabsControlItem__Name-sc-1w5evbu-0').nth(4).click()
        
        expect(menuOptions).toEqual(this.mainMenu);
    }
}
