import { test, expect, request } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';


const VALID_EMAIL = process.env.VALID_EMAIL;
const VALID_PASSWORD = process.env.VALID_PASSWORD;


test.describe('Automation Exercise - Login', () => {

  test('TC01 - Login with valid credentials"', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
   await expect(loginPage.loggedInText).toBeVisible();
    await expect(page).toHaveURL('https://www.automationexercise.com/')
  });

  test('TC02 - invalid login shows error message', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong@email.com', 'wrongpassword');
    await expect(loginPage.errorMessage).toBeVisible();
  });


test('TC03 - API verify login', async ({ request }) => {
  const response = await request.post('/api/verifyLogin', {
    form: { email: VALID_EMAIL, password: VALID_PASSWORD }
  });
  const body = await response.json();
  expect(body.message).toBe('User exists!');
});
});
