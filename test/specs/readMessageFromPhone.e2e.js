const LoginPage = require('../pageobjects/login.page');
const submissionPage = require('../pageobjects/submission.page')

const accountSid = 'AC13fb4ed9a621140e19581a14472a75b0'
const authToken = '074e90fe160216e2f54f84b186043e39'
const client = require('twilio')(accountSid, authToken)


describe('My Login application', () => {

    beforeEach(async function () {
        await browser.url('https://app-stage.comcate.com/crm/2ysz1dvfru')
      })

    it.skip('Validate if Appropriate text message is received to Collab and Assignee', async () => {
    //await LoginPage.open();
    await LoginPage.invokeURL('https://app-stage.comcate.com/crm/2ysz1dvfru');
    await submissionPage.reportAnIssue.waitForDisplayed()
    await submissionPage.descriptionBox.setValue('This is test submission')
    await submissionPage.nextButton.isDisplayed()
    await submissionPage.nextButton.click()
    await browser.pause(1000)
    await submissionPage.category('Noise Complaint').isDisplayed()
    await submissionPage.category('Noise Complaint').click()
    await (await submissionPage.nextButton).isDisplayed()
    await submissionPage.nextButton.click()
    await (await submissionPage.nextButton).isDisplayed()
    await submissionPage.nextButton.click()
    await submissionPage.firstName.setValue('Praful')
    await submissionPage.lastName.setValue('Kolhe')
    await submissionPage.phoneNumber.setValue('8983759524')
    await browser.pause(1000)
    await submissionPage.submitButton.click()

    await expect(submissionPage.issueSubmitted).toBeDisplayed()

    // Get Message ...
    const listOfMessages1 = await client.messages.list({ limit: 1 })
    let messageBody
    listOfMessages1.forEach((firstmessage) => {
      messageBody = JSON.stringify(firstmessage.body)
    })
    console.log('Message body is ' + messageBody)
    const substring = messageBody.substring(1, 87)
    console.log('substring collab is ' + substring)

    })

    it('Validate if Appropriate text message is received to submitter', async () => {
        //await LoginPage.open();
        await LoginPage.invokeURL('https://app-stage.comcate.com/crm/2ysz1dvfru');
        await submissionPage.reportAnIssue.waitForDisplayed()
        await submissionPage.descriptionBox.setValue('This is test submission')
        await submissionPage.nextButton.isDisplayed()
        await submissionPage.nextButton.click()
        await browser.pause(1000)
        await submissionPage.category('Broken Street 2').isDisplayed()
        await submissionPage.category('Broken Street 2').click()
        await (await submissionPage.nextButton).isDisplayed()
        await submissionPage.nextButton.click()
        await (await submissionPage.nextButton).isDisplayed()
        await submissionPage.nextButton.click()
        await submissionPage.firstName.setValue('Praful')
        await submissionPage.lastName.setValue('Kolhe')
        await submissionPage.phoneNumber.setValue('5737874194')
        await browser.pause(1000)
        await submissionPage.submitButton.click()
    
        await expect(submissionPage.issueSubmitted).toBeDisplayed()
    
        // Get Message ...
        const listOfMessages1 = await client.messages.list({ limit: 1 })
        let messageBody
        listOfMessages1.forEach((firstmessage) => {
          messageBody = JSON.stringify(firstmessage.body)
        })
        console.log('Message body is ' + messageBody)
        const substring = messageBody.substring(1, 87)
        console.log('substring Submitter is ' + substring)

        })
})


