const cheerio = require("cheerio");
const gmail = require("gmail-tester");
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
    console.log(messages[0].body.html);
    let message = cheerio
      .load(messages[0].body.html)("h1.verificationCode")
      .text();
    console.log(message);
    return message;
  }
}
module.exports = new GmailApi();
