Feature: As a user i want to create an account, search for dresses and buy them

Scenario: initial registration to create the account
Given on the login/signup page
When i register with the name 'j' and email address 'random1email@0gy1.com'
Then it takes me to the personal data registration page

Scenario: fill in registration data
Given on the personal data page
When i filled in my data 
Then successfully created account

Scenario: search for dresses
Given on the prducts page
When i enter the word 'dress' in the search bar
Then the page shows the 'dress' results

Scenario: add the dresses found to the cart
Given i filtered among the products to the dresses
When add all the dresses to the cart
Then all the dresses are in the cart

Scenario: check out the order
Given all the dresses are in the cart
When i click on 'Proceed To Checkout' and i fill in my bank details
Then succesfull purchase

Scenario: delete ny account
Given in the homepage
When i click on 'Delete Account'
Then my account was succesfully deleted