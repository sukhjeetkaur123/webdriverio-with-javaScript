import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import addUserPage from '../pageobjects/addUser.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await expect(browser).toHaveTitle('OrangeHRM');
        await LoginPage.login('Admin', 'admin123');
        await expect(SecurePage.flashAlert).toHaveTextContaining(
             'Welcome');
    });
});

describe('add user in application', () =>{
    it('add user', async () =>{
        await addUserPage.addUser();
    })
    it('verify the user should be on add user page', async() =>{
        await expect(SecurePage.verifyAddUserPage).toHaveText('Add User');

    })
    it('add values in user page', async()=>{
        await addUserPage.addEmpName('Admin A', 'sukhjeet11','admin123','admin123');
        await addUserPage.clickOnSavebutton();

    })
  
})


