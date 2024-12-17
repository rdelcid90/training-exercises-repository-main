export class MainPage {
    constructor(page){
        this.page = page 
    }
        get elements (){
            return{
                searchbar: this.page.locator('#root > main > section:nth-child(2) > div > form > div > input[type=text]'),
                searchbtn: this.page.locator('#root > main > section:nth-child(2) > div > form > div > button'),
                repo1Value: this.page.locator('#root > main > section:nth-child(3) > section > article:nth-child(1) > div > h3')
            }
        }

        //metodos

        async Enteruser(){
            await this.elements.searchbar.fill('Faried');
        }
        async ClickOnSearchBtn(){
            await this.elements.searchbtn.click();
        }
    
}