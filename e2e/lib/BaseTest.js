import { test as playwrightTest } from "@playwright/test";
import InboxPage from "../pages/InboxPage";

const test = playwrightTest.extend({
  inboxPage: async ({ page }, use) => {
    const inboxPage = new InboxPage(page);
    await use(inboxPage);
  },
});

export default test;
