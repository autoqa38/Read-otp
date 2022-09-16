const gmailApi = require("../../helpers/gmailApi");
const loginPage = require("../pageobjects/login.page");

const signupPage = require("../pageobjects/signup.page");
describe("Read Email From Gmail", async function () {
  it.only("SignUp Flow", async function () {
    this.timeout(120000);
    const email = signupPage.createEmail();
    console.log(email);
    await signupPage.createAccountBtn.click();
    await signupPage.inputEmail.waitForDisplayed();
    await signupPage.inputEmail.setValue(email);
    await signupPage.password.setValue("Test@123");
    await signupPage.nextBtn.click();
    await signupPage.firstName.waitForDisplayed();
    await signupPage.firstName.setValue("first");
    await signupPage.lastName.setValue("second");
    await signupPage.dob.click();
    await signupPage.okBtn.waitForDisplayed();
    await signupPage.okBtn.click();
    await signupPage.checkBox.click();
    await signupPage.nextBtn.click();
    await signupPage.hippaCompliance.waitForDisplayed();
    await signupPage.scrollToAgree();
    await signupPage.agreeBtn.click();
    await signupPage.tAndC.waitForDisplayed();
    await signupPage.scrollToAgree();
    await signupPage.agreeBtn.click();
    await signupPage.checkYourEmail.waitForDisplayed();
    await browser.pause(2000);
    const code = await gmailApi.getCode(
      "no-reply@nile.ai",
      email,
      "[Action needed] Please verify with Nile"
    );
    await signupPage.otpField.setValue(code);
    await signupPage.nextBtn.click();
    await signupPage.accountType.waitForDisplayed();
  });
});
