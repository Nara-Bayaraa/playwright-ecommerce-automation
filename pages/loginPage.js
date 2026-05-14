export class LoginPage{
constructor(page){
    this.page = page;
    this.emailInput    = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton   = page.locator('[data-qa="login-button"]');
    this.errorMessage  = page.locator('p:has-text("Your email or password is incorrect!")');
    this.loggedInText  = page.locator('a:has-text("Logged in as")'); 
}

async goto() {
    await this.page.goto('/login');
  }

   async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}