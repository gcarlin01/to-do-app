import { test } from "@playwright/test";
import InboxPage from "../pages/InboxPage";

test("user can add and complete a task", async ({ page }) => {
  const inboxPage = new InboxPage(page);

  await inboxPage.navigate();
  await inboxPage.addTask("clean room");
  await inboxPage.completeTask("clean room");
});
