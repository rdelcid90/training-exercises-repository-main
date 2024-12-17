export class FormPage {
    constructor(page){
        this.page = page 
    }
        get elements () {
            return{

                firstName: this.page.locator('#first-name'),
                lastName: this.page.locator('#last-name'),
                jobTittle: this.page.locator('#job-title'),
                educationLevel: this.page.locator('#radio-button-1'),
                genderOption: this.page.locator('#checkbox-2'),
                yearsOfexperience: this.page.locator('#select-menu'),
                submitBtn: this.page.locator('body > div > form > div > div:nth-child(15) > a'),
            }

    }
        async Enterfirstname(){
            await this.elements.firstName.fill('Rafael');
        }
        async Enterlastname(){
            await this.elements.lastName.fill('Del Cid');
        }
        async Enterjobtittle(){
            await this.elements.jobTittle.fill('QA ');
        }
        async SelectEducation(){
            await this.elements.educationLevel.check();
        }
        async SelectGender(){
            await this.elements.genderOption.check();
        }
        async SelectExperience(){
            await this.elements.yearsOfexperience.selectOption({value: '1'});
        }
        async ClickSubmitButton(){
            await this.elements.submitBtn.click();
        }

}