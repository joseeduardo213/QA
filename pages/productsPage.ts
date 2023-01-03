import {Page} from '@playwright/test'

export default class products{

    constructor(public page: Page) {}

    async allCoincidences(){
        await this.page.locator('.features_items > div:nth-child(4)').click();
        await this.page.getByText('Rs. 1500 Stylish Dress Add to cart Rs. 1500 Stylish Dress Add to cart View Produ').click();
        await this.page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
      
        await this.page.locator('div:nth-child(5)').first().click();
        await this.page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('.features_items > div:nth-child(3)').click();
        await this.page.locator('.overlay-content > .btn').first().click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(8)').click();
        await this.page.locator('div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(7)').click();
        await this.page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(6)').click();
        await this.page.locator('div:nth-child(6) > .product-image-wrapper').click();
        await this.page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(9)').click();
        await this.page.locator('div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(10)').click();
        await this.page.locator('div:nth-child(10) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
        await this.page.locator('div:nth-child(11) > .product-image-wrapper').click();
        await this.page.locator('div:nth-child(11) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
      
    }

}