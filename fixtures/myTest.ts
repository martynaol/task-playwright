import CartPage from "../pages/cart.page";
import CheckoutPage from "../pages/checkout.page";
import MainPage from "../pages/main.page";
import ProductDetailsPage from "../pages/productDetails.page";
import Header from "../pages/section/header.section";
import { test as myTest } from '@playwright/test';

interface PageObjects {
    header: Header;
    mainPage: MainPage;
    productDetailsPage: ProductDetailsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage
}

const test = myTest.extend<PageObjects>({
    header: async ({ page }, use) => {
        await use(new Header(page));
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    }
});

export default test;
export const expect = test.expect;