

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    open () {
        return super.open('crm/2ysz1dvfru');
    }

    invokeURL(url){
        return browser.url(`${url}`)
    }
}

module.exports = new LoginPage();
