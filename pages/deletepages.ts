import {Page} from '@playwright/test'

export default class deleteAccount{

    constructor(public page: Page) {}

    async deleting(){
        await this.page.getByRole('link', { name: ' Delete Account' }).click();
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }
}