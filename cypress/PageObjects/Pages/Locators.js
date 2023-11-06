///<reference types="cypress-xpath"/>
import 'cypress-iframe';

/*Class & Function*/
export class Locators {

  /*Locator*/
  searchData = "#searchInput";
  searchInput = "#query"
  searchButton = "#query-box > form > #search-btn";
  totalRecords = ".totalRecords";
  resultData = ":nth-child(2) > .header > a";
}