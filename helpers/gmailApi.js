const cheerio = require("cheerio");
const gmail = require("gmail-tester");
class GmailApi {
  async getCode(sender, receiver, subject) {
    const messages = await gmail.get_messages(
      "./helpers/credentials.json",
      "./helpers/token.json",
      {
        include_body: true,
        from: sender,
        to: receiver,
        subject: subject,
      }
    );
    console.log(messages[0].body.html);
    const otp = cheerio
      .load(messages[0].body.html)("h1.verificationCode")
      .text();
    console.log("Your OTP is:" + otp);
    return otp;
  }
}
module.exports = new GmailApi();
