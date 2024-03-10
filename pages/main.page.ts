import { Locator, Page } from '@playwright/test';

export default class MainPage {
    page: Page;
    readonly CART_BUTTON_LOCATOR: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CART_BUTTON_LOCATOR = this.page.getByTitle(`View cart`);
    }

    public async goto() {
        await this.page.goto(`/`);
    }

    public async selectProductByName(productName: string) {
        await this.page.getByRole(`link`, { name: productName, exact: true }).click();
    }

    public async addProductToCart(section: number, index: number) {
        const addToCartButton = this.page.locator(`#tyche_products-${section}`).getByRole(`link`, { name: `Add to cart` }).nth(index);
        await addToCartButton.waitFor({ state: `visible` });
        await addToCartButton.click();
    }

    public async clickCartBtn() {
        await this.CART_BUTTON_LOCATOR.click({ timeout: 10000 });
    }
}