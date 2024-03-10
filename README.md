## Automation tests with Playwright and Page Object Model

This repository contatins end-to-end tests for web application (https://skleptest.pl/). The tests are written in Playwright test framework and are designed to simulate user interactions with the application.

## Getting Started

Prerequisites: 
 - Download and install NodeJS 14(or above)
 - Clone the repo using the below URL: https://github.com/martynaol/playwright-skleptest.pl
 - Navigate to the folder and install npm packages using:

```
npm install
```

 - install playwright

 ```
 npx playwright install
 ```

## Usage

1. For Browser Configuration, change required parameters in playwright.config.ts.
2. Run a single test file 
```
npx playwright test <path_to_spec>
```
3. Run all tests in headed browsers
```
npm run test
```
4. Run all tests in debug mode with Playwright Inspector
```
npm run test:debug
```
5. Run tests with the tag @smoke and chromium project 
```
npm run test:smoke:chromium
```
6. Run all tests in UI mode and chromium project
```
npm run test:ui:chromium
```

## Project Structure
This project follows a structured approach to organize the codebase, making it easy to maintain and understand. The main components of the project structure are:

1. **fixtures:** This folder will contain setup for tests, providing a consistent environment for performing actions against web applications and the test data require for testing.
2. **pages:** This folder will contain the page objects for our application. Each page object will have methods and properties that represent the page’s elements and actions.
3. **tests:** This folder will contain the test files for our application. Each test file will use the page objects to perform the tests.
4. **playwright.config.js:** This file is used to configure Playwright settings, such as project-wide timeouts, browsers to use, and other settings.
5. **package.json:** This is the main configuration file for the project. It contains metadata about the project, such as its name, version, and dependencies. It also includes scripts for running tasks, such as tests and building the project.
6. **.eslintrc.js:** This file is a configuration file for a tool named ESLINT
7. **tsconfig.json:** This is the TypeScript configuration file for the project.

## Report & Logs
Playwright HTML report will be present inside
```
test-results/results/index.html
```

Execution log will be present in the log file.
```
test-results/logs/execution.log
```

## Test casese
Objective : automate tests focusing on the key user journey: find the product using the search function, add it to the cart, check if the product is actually in the cart and then remove it from the cart. This path reflects typical user interactions on e-commerce platforms.

```
    1. Should returns relevant search result and adds product to cart
    2. Should adds selected product, navigates to cart and proceed checkout
    3. Should removes product from the cart
```

## Comments
I focused on automating the positive user paths of the application: 
1. Searching the product using the search engine and clicking enter, verifying that the appropriate item has been displayed and adding it to the cart from the level of the product page and checking if the product is in the cart.
2. Adding a product from the main page, going to the cart - in this case an error was detected on the application side. When the user clicks the button `View cart` the user is not moved to the page of the cart, but is on the main page all the time. A manual verification of this behavior confirmed that it was not an error in the test code. The test is currently failing
3. The last case is the removal of the product from the cart using the available button to remove item. No action is connected to the button, so the user has one option to drop the product by changing the quantity of the product to 0. Test ends unsuccessfully due to error on the application side.