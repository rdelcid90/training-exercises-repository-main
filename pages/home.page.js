export class HomePage{
    constructor(page){
        this.page = page 
    }
       get elements (){
         return{
         topMenu:{
                    home: this.page.locator('[href="index.html"]'),
                    login: this.page.locator('#login2')
                  },
         logInModal:{
                    usernameLog: this.page.locator('#loginusername'),
                    passwordLog: this.page.locator('#loginpassword'),
                    logInBtn: this.page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary'),

                  }  
            }

       } 

       //Metodos 

       async ClickOnLoginLink(){
       await this.elements.topMenu.login.click();
       }
       async EnterUserName(){
       await this.elements.logInModal.usernameLog.fill('Rafael');
       }
       async EnterPassword(){
        await this.elements.logInModal.passwordLog.fill('Rafael123')
       }

}