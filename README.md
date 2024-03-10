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
2.


## Test casese
Objective : Your mission is to automate tests focusing on the key user journey: find the product using the search function, add it to the cart, check if the product is actually in the cart and then remove it from the cart. This path reflects typical user interactions on e-commerce platforms and checks the functionality of the site and the ability to automate such processes.
```
    1. Should returns relevant search result and adds product to cart
    2. Should adds selected product, navigates to cart and proceed checkout
    3. Should removes product from the cart
```

