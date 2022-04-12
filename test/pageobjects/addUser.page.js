import keys from 'webdriverio/build/commands/browser/keys';
import Page from './page';

class addUserPage extends Page {
    /**
     * define selectors using getter methods
     */
    get clickOnSystemAdminstratorButton () {
        return $('#menu_admin_viewAdminModule');
    }

    get clickOnAddButton () {
        return $('#btnAdd');
    }

    get btnSubmit () { 
        return $('#btnLogin');
}
    get fillEmpName(){
        return $("//input[@id=\'systemUser_employeeName_empName\']")
    }

    get fillPassword(){
        return $("//input[@id=\'systemUser_password\']")
    }

    get confirmPassword(){
        return $("//input[@id=\"systemUser_confirmPassword\"]")
    }
    
    get savebutton(){
        return $('#btnSave')
    }

    get userName(){
        return $("//input[@id='systemUser_userName']")
    }
    


    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    async addUser(){
        await (await this.clickOnSystemAdminstratorButton).click();
        await(await this.clickOnAddButton).click();
        
    }

    async addEmpName(empName, user, password,confirmPassword){
        await (await this.fillEmpName).setValue(empName);
        await (await this.userName).setValue(user);
         await (await this.fillPassword).setValue(password)
         await (await this.confirmPassword).setValue(confirmPassword)

    }

    async clickOnSavebutton(){
        await(await this.savebutton).click();
    }
}
export default new addUserPage();