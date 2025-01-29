export class HoPage {
    constructor(page){
        this.page = page 
    }
       get elements (){
         return{
         topMenu:{
                    home: this.page.locator('[href="index.html"]'),
                    login: this.page.locator('#login2'),
                    singin: this.page.locator('#signin2'),
                  },
         logInModal:{
                    usernameLog: this.page.locator('#loginusername'),
                    passwordLog: this.page.locator('#loginpassword'),
                    logInBtn: this.page.locator('#logInModal > div > div > div.modal-footer > button.btn.btn-primary'),

                  },
          Signup:{
                  usernameSingn: this.page.locator('#sign-username'),
                  passwordSingn: this.page.locator('#sign-password'),
                  singInBtn: this.page.locator('#signInModal > div > div > div.modal-footer > button.btn.btn-primary'),
                  closeBtn: this.page.locator('#signInModal > div > div > div.modal-footer > button.btn.btn-secondary')
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
        await this.elements.logInModal.passwordLog.fill('Rafael123');
       }

       async ClickOnSinginLick(){
        await this.elements.topMenu.singin.click();
       }
       async EnterUserNameSing(){
        await this.elements.Signup.usernameSingn.fill('Rafael');
       }
       async EnterPasswordSing(){
        await this.elements.Signup.passwordSingn.fill('Rafael123');
       }
        async ClickOnSingInBtn(){
        await this.elements.Signup.singInBtn.click();
        }
        async ClickOnCloseBtn(){
        await this.elements.Signup.closeBtn.click();
        }
}