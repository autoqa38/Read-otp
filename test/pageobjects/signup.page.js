const Page = require("./page");

class SignupPage extends Page {
  get createAccountBtn() {
    return this.getElementByText("Create Account");
  }
  get inputEmail() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_email_registration"
    );
  }
  get phoneNo() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_phone_registration"
    );
  }
  get password() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_password_registration"
    );
  }
  get nextBtn() {
    return this.getElementByText("Next");
  }
  get firstName() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_patient_info_first_name"
    );
  }
  get lastName() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_patient_info_last_name"
    );
  }
  get dob() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_birthdate"
    );
  }
  get okBtn() {
    return this.getElementByText("OK");
  }
  get checkBox() {
    return $("android.widget.CheckBox");
  }
  get hippaCompliance() {
    return this.getElementByText("HIPAA COMPLIANCE");
  }
  get agreeBtn() {
    return this.getElementByText("Agree");
  }
  get tAndC() {
    return this.getElementByText("TERMS & CONDITIONS");
  }
  async scrollToAgree() {
    do {
      let scroll =
        "new UiScrollable(new UiSelector().scrollable(true)).flingForward()";
      let loc = await $(`android=${scroll}`);
    } while ((await this.agreeBtn.getAttribute("enabled")) != "true");
  }
  get checkYourEmail() {
    return this.getElementByText("CHECK YOUR EMAIL");
  }
  get otpField() {
    return this.getElementByResourceId(
      "ai.nile.patient.qa:id/edit_text_create_account_verification_code"
    );
  }
  get accountType() {
    return this.getElementByText("ACCOUNT TYPE");
  }
  createEmail() {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let email = "";
    for (let i = 0; i < 5; i++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }
    email = "autoqa38+" + email + "@gmail.com";
    return email;
  }
}
module.exports = new SignupPage();
