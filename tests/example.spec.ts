import { test, expect } from '@playwright/test';
import createAccount from '../pages/signupPage'
import registerAccount from '../pages/registerPage';
import searchpage from '../pages/searchPage';
import products from '../pages/productsPage';
import checkingout from '../pages/checkoutPage';
import deleteAccount from '../pages/deletepages';


test('create acount and buy dresses', async ({ page }) => {
  const create = new createAccount(page)
  const register = new registerAccount(page)
  const searhing = new searchpage(page)
  const product = new products(page)
  const checking = new checkingout(page)
  const deleteAcc = new deleteAccount(page);

  await page.goto('https://automationexercise.com/')
  
  //create account
  await create.signUp('Pablo', 'pablo@randonm213.com')
  
  //enter account information
  //if tner is an error in the first step of this section, the email must be changed and run again
  await register.clickTitle();
  await register.enterPassword('password');
  await register.enterDateBirth('10', '8', '2008');
  await register.checkMarks();
  await register.enterFirstName('Pablo');
  await register.enterLastName('Soarez');
  await register.enterCompany('Diunsa');
  await register.enterAddress('Miami, Florida');
  await register.enterCity('United States');
  await register.enterState('Florida');
  await register.enterCity('Miami');
  await register.enterZipCode('10011');
  await register.enterNumber('3330033');
  await register.clickToCreateAccount();
  

  //filter dresses on the search bar
  await searhing.enterSearch('dress')

  //adds to its cart all dresses
  //sometimes when running this part of the program ther is an error, and its because the page contains ads that appear randomly, and because that, the program cant continue with the process because it does not find the button that must be pressed
  //to avoid this error its preferable to use the command "npx playwright test --debug" and the run it from the playwright inspector, to see if any ads came out and be able to close it so that the execution continues coreectly
  await expect(page).toHaveURL('https://automationexercise.com/products?search=Dress');
  await product.allCoincidences();

  //check out the order
  await checking.clickToChekout();
  await checking.enterNameNumberCard('00000', '0000');
  await checking.enterCodeCard('096');
  await checking.enterDateCard('10', '2027');
  await checking.continueChekout();


  //the account is deleted in case it runs again, the email can be used again to create the account
  //and the program can continue to run without problem
  await deleteAcc.deleting();
});
