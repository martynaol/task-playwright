import { Locator, Page } from '@playwright/test';

export default class Header {
    page: Page;
    readonly SEARCH_FIELD_LOCATOR : Locator;
    readonly SEARCH_BUTTON_LOCATOR : Locator;
    readonly CART_BUTTON_LOCATOR : Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.SEARCH_FIELD_LOCATOR = this.page.locator(`#search-field-top-bar`);
        this.SEARCH_BUTTON_LOCATOR = this.page.locator(`#search-top-bar-submit`);
        this.CART_BUTTON_LOCATOR = this.page.locator(`.top-cart`);
    }
    async fillInSearchField(value:string){
        await this.SEARCH_FIELD_LOCATOR.fill(value);
    }

    async clickSearchButton(){
        await this.SEARCH_BUTTON_LOCATOR.click();
    }
    
    async clickCartBtn() {
        await this.CART_BUTTON_LOCATOR.click();
    }

    async searchProductByClick(value: string) {
        await this.fillInSearchField(value);
        await this.clickSearchButton();
    }

    async searchProductByEnter(value: string) {
        await this.fillInSearchField(value);
        await this.SEARCH_FIELD_LOCATOR.press(`Enter`);
    }
}