clone this repo and open terminal with root project directory and following the command step by step:
 
 
 #### System Installation tools:
 1. Node.JS
 2. Npm
 3. VS Code (IDE)
 4. JDK
 5. Allure
 
 #### install the dependencies:

 ```bash
 npm init -y
 ```

 ```bash
 npm install cypress@latest
 ```

 ```bash
 npm i cypress-xpath
 ```

  ```bash
 npm i node-xlsx
 ```

   ```bash
 npm i cypress-iframe
 ```


 #### Single run:

  ```bash
 npx cypress run --spec cypress/integration/test.js --browser chrome --headed
 ```

