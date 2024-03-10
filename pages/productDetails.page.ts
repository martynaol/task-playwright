import { Locator, Page,expect } from '@playwright/test';

export default class ProductDetailsPage {
    page: Page;
    readonly ADD_TO_CART_BUTTON_LOCATOR: Locator;
    readonly QUANTITY_INPUT_LOCATOR: Locator;

    constructor(page: Page) {
        this.page = page;
        this.QUANTITY_INPUT_LOCATOR = this.page.getByLabel(`Quantity`);
        this.ADD_TO_CART_BUTTON_LOCATOR = this.page.getByRole(`button`, { name: `Add to cart` });
    }

    public async goto(productName: string) {
        await this.page.goto(`/product/${productName}/`);
    }

    public async fillInQuantity(number: number){
        await this.QUANTITY_INPUT_LOCATOR.fill(number.toString());
    }

    public async clickAddToCartBtn() {
        await this.ADD_TO_CART_BUTTON_LOCATOR.click();
    }
    public async assertProductDetails(productName: string) {
        await expect(this.page).toHaveTitle(`${productName} – Generic Shop`);

    }
}