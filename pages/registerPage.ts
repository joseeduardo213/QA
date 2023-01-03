import {Page} from '@playwright/test'

export default class registerAccount{

    constructor(public page: Page) {}

    async clickTitle() {
        await this.page.getByText('Mr.',).click();
    }

    async enterPassword(password: string){
        await this.page.getByLabel('Password *').fill(password);
    }

    async enterDateBirth(day: string, month: string, year: string){
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);
    }

    async checkMarks(){
        await this.page.getByText('Sign up for our newsletter!').click();
        await this.page.getByLabel('Receive special offers from our partners!').check();
    }

    async enterFirstName(firstName: string){
        await this.page.getByLabel('First name *').fill(firstName);
    }

    async enterLastName(lastName: string){
        await this.page.getByLabel('Last name *').fill(lastName);
    }

    async enterCompany(company: string){
        await this.page.locator('#company').fill(company);
    }

    async enterAddress(address: string){
        await this.page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill(address);
    }

    async enterCountry(country: string){
        await this.page.getByRole('combobox', { name: 'Country *' }).selectOption(country);
    }

    async enterState(state: string){
        await this.page.getByLabel('State *').fill(state);
    }

    async enterCity(city: string){
        await this.page.getByLabel('City *').fill(city);
    }

    async enterZipCode(zipCode: string){
        await this.page.locator('#zipcode').fill(zipCode);
    }

    async enterNumber(number: string){
        await this.page.getByLabel('Mobile Number *').fill(number);
    }

    async clickToCreateAccount() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.getByRole('button', { name: 'Create Account' }).click(),
            this.page.getByRole('link', { name: 'Continue' }).click(),
        ])
    }

}     
