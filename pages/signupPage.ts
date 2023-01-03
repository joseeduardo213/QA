import {Page} from '@playwright/test'

export default class createAccount{

    constructor(public page: Page) {}

    async signUp(name: string, email: string){
        await this.clickToSignupLogin()
        await this.enterName(name)
        await this.enterEmail(email)
        await this.clickContinueToSignUp()
    }

    async clickToSignupLogin(){
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
    }

    async enterName(name: string) {
        await this.page.getByPlaceholder('Name').fill(name);
    }
    async enterEmail(email: string) {
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
    }
    async clickContinueToSignUp() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.getByRole('button', { name: 'Signup' }).click()
        ])
    }
}