import 'cypress-iframe';
import { Locators } from "../PageObjects/Pages/Locators";

describe("Search Daily Website Single Keyword Check", () => {
  const jira = new Locators();
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      return false;
    });
    cy.visit("https://search.dailystocks.com/");
    cy.get(jira.searchData, { timeout: 10000 }).type("B");
  })

  it("Search Daily Website Single Keyword Check", () => {
    cy.readFile('cypress/fixtures/utils.json').then((Utils) => {
      cy.parseXlsx('cypress/fixtures/credentials.xlsx')
        .then(
          jsonData => {
            const rowLength = Cypress.$(jsonData[0].data).length
            for (let i = 1; i < rowLength; i++) {

              let value = jsonData[0].data[i];
              cy.get(jira.searchInput, { timeout: 10000 }).clear();
              cy.wait(2000);
              
              cy.get(jira.searchInput, { timeout: 10000 }).type(value[0]);
            
              cy.wait(2000);
              cy.get(jira.searchButton, { timeout: 10000 }).click({ force: true });
           
              cy.get(jira.totalRecords).invoke('text').then((text) => {
                if (text.trim()==="No articles found") {
                  cy.go(-1);
                }
                else{
                  cy.get(jira.resultData).invoke("removeAttr", "target", { timeout: 10000 }).click({ force: true });
                  cy.go(-1);
                }
              })

            }
          }
        )
    });
  })
})