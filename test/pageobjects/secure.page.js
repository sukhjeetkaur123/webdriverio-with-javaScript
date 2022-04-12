

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#welcome');
    }
    // get title(){
    //     return $()
    // }
    get verifyAddUserPage(){
        return $('#UserHeading')
    }
}

export default new SecurePage();
