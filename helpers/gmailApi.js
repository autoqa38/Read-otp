const cheerio = require("cheerio");
const gmail = require("gmail-tester-extended");
class GmailApi {
  async getCode(email, subject) {
    const messages = await gmail.get_messages(
      "./helpers/credentials.json",
      "./helpers/token.json",
      {
        include_body: true,
        from: "no-reply@nile.ai",
        to: email,
        subject: subject,
      }
    );
    let message = cheerio
      .load(await messages[0].body.html)("h1.verificationCode")
      .text();
    console.log(message);
    return message;
  }
}
module.exports = new GmailApi();
