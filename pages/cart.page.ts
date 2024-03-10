import { expect, Locator, Page } from '@playwright/test';

export default class CartPage {
    page: Page;
    readonly PROCEED_CHECKOUT_BUTTON_LOCATOR: Locator;
    readonly QUANTITY_INPUT_LOCATOR: Locator;
    readonly EMPTY_CART_LOCATOR: Locator;

    constructor(page: Page) {
        this.page = page;
        this.PROCEED_CHECKOUT_BUTTON_LOCATOR = this.page.getByTitle(`Proceed to checkout`);
        this.QUANTITY_INPUT_LOCATOR = this.page.getByLabel(`Quantity`);
        this.EMPTY_CART_LOCATOR = this.page.getByText(`Your cart is currently empty.`);

    }
    public async getProductRow(productName: string) {
        const productRow =  this.page.getByRole(`link`, { name: productName });
        await expect(productRow).toBeVisible();
    }
    public async goto() {
        await this.page.goto(`/cart`);
    }

    public async assertEmptyCart() {
        await expect(this.EMPTY_CART_LOCATOR).toBeVisible();
    }

    public async assertCart(productName: string, quantity: number) {
        await expect(this.page).toHaveURL(/cart/);
        await this.getProductRow(productName);
        await expect(this.QUANTITY_INPUT_LOCATOR).toHaveAttribute(`value`, quantity.toString());
    }

    public async clickProceedCheckoutBtn() {
        await this.PROCEED_CHECKOUT_BUTTON_LOCATOR.click();
    }

    public async removeProduct() {
        await this.page.getByLabel(`Remove this item`).click();
    }
}