import {Given, When, Then} from "@cucumber/cucumber"
import { test, expect } from '@playwright/test';

test("initial registration to create the account", async ({ page }) =>{
    Given("on the login/signup page", async ()=>{
        await page.goto('https://automationexercise.com/')
        await page.getByRole('link', { name: ' Signup / Login' }).click();
    })

    When("i register with the name 'j' and email address 'random1email@0gy1.com'", async ()=>{
        await page.getByPlaceholder('Name').fill('j');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('random1email@0gy1.com');
        await page.getByRole('button', { name: 'Signup' }).click();
    })

    Then("it takes me to the personal data registration page", async ()=>{
        await expect(page).toHaveURL("https://automationexercise.com/signup")
    })
})

test("fill in registration data", async ({page}) => {

    Given("on the personal data page",async () =>{
        await page.goto("https://automationexercise.com/signup")
    })
    
    When("i filled in my data",async () =>{
        await page.getByText('Mr.',).click();
        await page.getByLabel('Password *').fill('password');
        await page.locator('#days').selectOption('19');
        await page.locator('#months').selectOption('7');
        await page.locator('#years').selectOption('2007');
        await page.getByText('Sign up for our newsletter!').click();
        await page.getByLabel('Receive special offers from our partners!').check();
        await page.getByLabel('First name *').fill('pablo');
        await page.getByLabel('Last name *').fill('watson');
        await page.locator('#company').fill('diunsa');
        await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Miami, Florida');
        await page.getByRole('combobox', { name: 'Country *' }).selectOption('United States');
        await page.getByLabel('State *').fill('Florida');
        await page.getByLabel('City *').fill('Miami');
        await page.locator('#zipcode').fill('10001');
        await page.getByLabel('Mobile Number *').fill('1110111');
        await page.getByRole('button', { name: 'Create Account' }).click();
    })
    
    Then("successfully created account",async () =>{
        await expect(page).toHaveURL("https://automationexercise.com/account_created")
    })
})


test("search for dresses", async ({page}) =>{
    Given("on the prducts page",async () =>{
        await page.goto("https://automationexercise.com/products")
    })

    When ("i enter the word 'dress' in the search bar",async () =>{
        await page.getByPlaceholder('Search Product').click();
        await page.getByPlaceholder('Search Product').fill('dress');
        await page.getByRole('button', { name: '' }).click();
    })    

    Then("the page shows the 'dress' results", async () =>{
        await expect(page).toHaveURL('https://automationexercise.com/products?search=Dress');
    })

})


test("add the dresses found to the cart", async ({page}) => {
    Given("i filtered among the products to the dresses",async () =>{
        await page.goto('https://automationexercise.com/products?search=Dress')
    })

    When("add all the dresses to the cart",async () =>{
        await page.locator('.choose > .nav > li > a').first().click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(7) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(8) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(10) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(11) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
        await page.goto('https://automationexercise.com/products?search=Dress');
        await page.locator('div:nth-child(9) > .product-image-wrapper > .choose > .nav > li > a').click();
        await page.getByRole('button', { name: ' Add to cart' }).click();
        await page.getByRole('button', { name: 'Continue Shopping' }).click();
    })

    Then("all the dresses are in the cart",async () =>{
        await page.goto('https://automationexercise.com/view_cart');
        await expect(page).toHaveURL('https://automationexercise.com/view_cart');    
    })

})

test("check out the order", async ({page}) => {
    Given("all the dresses are in the cart",async () =>{
        await page.goto('https://automationexercise.com/view_cart');
    })
   
    When("i click on 'Proceed To Checkout' and i fill in my bank details",async () =>{
        await page.getByText('Proceed To Checkout').click();
        await page.getByRole('link', { name: 'Place Order' }).click();
        await page.locator('input[name="name_on_card"]').fill('00000000');
        await page.locator('input[name="card_number"]').fill('0000000');
        await page.getByPlaceholder('ex. 311').fill('096');
        await page.getByPlaceholder('MM').fill('02');
        await page.getByPlaceholder('YYYY').fill('2025');
        await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
    })

    Then("succesfull purchase", async () => {
        await expect(page).toHaveURL("https://automationexercise.com/payment_done/10438")
    })

})

test("delete ny account", async ({page}) => {
    Given("in the homepage", async () => {
        await page.goto('https://automationexercise.com/')
    })

    When("i click on 'Delete Account'", async () => {
        await page.getByRole('link', { name: ' Delete Account' }).click();
    })

    Then("my account was succesfully deleted", async () => {
        await expect(page).toHaveURL("https://automationexercise.com/delete_account")
    })

})