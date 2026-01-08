import { Builder, By } from "selenium-webdriver";

test(
  "frontend displays ENV variable",
  async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("http://localhost:3000");
      const bodyText = await driver
        .findElement(By.tagName("body"))
        .getText();

      expect(bodyText).toContain("Running ENV");
    } finally {
      await driver.quit();
    }
  },
  30000
);