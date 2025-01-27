export class menuPage {
    constructor(page){ 
        this.page = page;
        this.frame = page.frameLocator('iframe.application-demo-new-dashboard-iframe');
        this.iframeContainer = page.locator('.application-demo-new-dashboard-iframe-container');
    }

    mainMenu = [
        'Pizza', 'Burgers', 'Snacks & Sides', 'Salads', 'Drinks'
    ];

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
       
        await menuFrame.locator('.TabsControlItem__Name-sc-1w5evbu-0').nth(1).click()
        
       
    }

}