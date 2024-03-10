import { expect, Page } from '@playwright/test';

export default class CheckoutPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto(`/checkout`);
    }

    public async assertCheckoutPage() {
        await expect(this.page).toHaveURL(/checkout/, {timeout: 10000});
        await expect(this.page).toHaveTitle(`Checkout`);
    }
}