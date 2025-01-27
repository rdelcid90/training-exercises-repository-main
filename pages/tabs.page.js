export class TabsPage {
    constructor(page){
        this.page = page 
    }
        get elements () {
            return{
                switchButton: this.page.locator('#new-tab-button'),
                autoComplete: this.page.locator('body > div > div > li:nth-child(5) > a')
                
            }
        }
            async CickOnSwitchBtn(){
                await this.elements.switchButton.click()
            } 

            async ClickOnAutocompleteBtn(){
                await this.elements.autoComplete.click
            }
}