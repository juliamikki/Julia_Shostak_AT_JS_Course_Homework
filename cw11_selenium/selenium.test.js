import { By, until, Builder } from "selenium-webdriver";

(async function () {
  const driver = new Builder().forBrowser("chrome").build();
  await driver.manage().window().maximize();
  await driver.get("https://www.onliner.by/");
  await driver.wait(until.elementLocated(By.className("auth-bar__item--text")));
  const enterButton = await driver.findElement(By.className("auth-bar__item--text"));
  await enterButton.click();
  const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'));
  await loginField.sendKeys("Login Name");
  const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'));
  await passwordField.sendKeys("Password");
  const loginButton = await driver.findElement(By.css('[type="submit"]'));
  await loginButton.click();
  await driver.wait(until.elementLocated(By.className("auth-form__description_error")));
  const errorMessage = await driver.findElement(By.className("auth-form__description_error"));
  console.log(await errorMessage.getText());
  await driver.quit();
})();
