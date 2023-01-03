import {Page} from '@playwright/test'

export default class searchpage{

    constructor(public page: Page) {}

    async enterSearch(search: string) {
        await this.page.getByRole('link', { name: ' Products' }).click();
        await this.page.getByPlaceholder('Search Product').click();
        await this.page.getByPlaceholder('Search Product').fill(search);
        await this.page.getByRole('button', { name: '' }).click();
    }

}