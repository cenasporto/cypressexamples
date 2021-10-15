# Cypress Example 
This is a first start on Cypress Test Automation Tool to **Explore techniques for automated frontend web testing with Cypress and JavaScript**

### Installing project dependencies
```
$ npm install

or 

$ npm ci

```

### Running all Cypress Tests
```
$ npm test
```

### Running Cypress Tests on Command line 
```
$ npm run cypress:run
```

### Running Cypress Tests on Test Runner
```
$ npm run cypress:open
```

### Running Cypress Tests on chrome
```
$ npm run cypress:chrome
```

### Running Cypress Tests on firefox
```
$ npm run cypress:firefox
```

## Improvements to be done
To prepare this project to be robust and flxible: 
* Add new user test only works one time-Prepare the test to generate random valid emails - thsi creates lots of garbage data - or delete users after eahc run wich is not possible on PROD environment through UI
* Separate Test Data from Test Scripts
* Separate Locators from Test Scripts
* Build Multilingual support project sctucture
* Implement Cypress closures to avoid issues form default assynchronous behavior
* Prepare Test Project for CI/CD pipelines integration (Azure devops + Jenkins)
* Investigate reporting features
