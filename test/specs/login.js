describe('login test', ()=>{
    it('should vlidate page title', async ()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/");
        // await expect(browser.getTitle()).toEqual('Orange HRM');
        await expect(browser).toHaveTitle('OrangeHRM');

        const user = $('#txtUsername');
        const password = $('#txtPassword');
        const login = $('#btnLogin');
        const welcomeText = $('#welcome');
        
        await(await user).setValue('Admin');
        await(await password).setValue('admin123');
        await(await login).click();

        await expect(welcomeText).toHaveAttrContaining('Welcome Paul')

    


    })
})