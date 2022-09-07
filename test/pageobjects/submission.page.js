

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class submissionPage extends Page {
    /**
     * define selectors using getter methods
     */
     get reportAnIssue() {
        return $('//h1[text()="Report an issue"]')
      }
    
      get descriptionBox() {
        return $('//textarea[@name="description"]')
      }
    
      get nextButton() {
        return $(
          '//div[contains(@class,"accordion__content expanded")]//button[text()="Next"]',
        )
      }
    
      category(categoryName) {
        return $(`//div[@class='chip__body' and text()='${categoryName}']`)
      }
    
      get firstName() {
        return $('//input[@name="firstName"]')
      }
    
      get lastName() {
        return $('//input[@name="lastName"]')
      }
    
      get phoneNumber() {
        return $('//input[@name="phoneNumber"]')
      }
    
      get submitButton() {
        return $('//button[text()="Submit"]')
      }
    
      get issueSubmitted() {
        return $('//h5[text()="Issue submitted successfully"]')
      }
}

module.exports = new submissionPage();
