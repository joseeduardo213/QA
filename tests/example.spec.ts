import { test, expect } from '@playwright/test';

test('create acount and buy dresses', async ({ page }) => {
  
  await page.goto('https://automationexercise.com/')
  
  //create account
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').fill('j');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('random1email@0gy1.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  //enter account information
  //if tner is an error in the first step of this section, the email must be changed and run again
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
  await page.getByRole('link', { name: 'Continue' }).click();

  //filter dresses on the search bar
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('dress');
  await page.getByRole('button', { name: '' }).click();
  await page.goto('https://automationexercise.com/products?search=Dress')

  //adds to its cart all dresses
  //sometimes when running this part of the program ther is an error, and its because the page contains ads that appear randomly, and because that, the program cant continue with the process because it does not find the button that must be pressed
  //to avoid this error its preferable to use the command "npx playwright test --debug" and the run it from the playwright inspector, to see if any ads came out and be able to close it so that the execution continues coreectly
  await expect(page).toHaveURL('https://automationexercise.com/products?search=Dress');
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

  //check out the order
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').fill('00000000');
  await page.locator('input[name="card_number"]').fill('0000000');
  await page.getByPlaceholder('ex. 311').fill('096');
  await page.getByPlaceholder('MM').fill('02');
  await page.getByPlaceholder('YYYY').fill('2025');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();

  //the account is deleted in case it runs again, the email can be used again to create the account
  //and the program can continue to run without problem
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});
