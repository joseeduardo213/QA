import {Page} from '@playwright/test'

export default class checkingout{

    constructor(public page: Page) {}


    async clickToChekout(){
        await this.page.getByRole('link', { name: ' Cart' }).click();
        await this.page.getByText('Proceed To Checkout').click();
        await this.page.getByRole('link', { name: 'Place Order' }).click();
    }

    async enterNameNumberCard(nameCard: string, numberCard: string){
        await this.page.locator('input[name="name_on_card"]').fill(nameCard);
        await this.page.locator('input[name="card_number"]').fill(numberCard);      
    }

    async enterCodeCard(codeCard: string){
        await this.page.getByPlaceholder('ex. 311').fill(codeCard);
    }

    async enterDateCard(mm: string, yyyy: string){
        await this.page.getByPlaceholder('MM').fill(mm);
        await this.page.getByPlaceholder('YYYY').fill(yyyy);      
    }

    async continueChekout(){
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await this.page.getByRole('link', { name: 'Continue' }).click();      
    }


}

